import type { SmithyAst } from "../ast/types";

/**
 * A hand-authored Smithy JSON AST fixture that mirrors a representative subset
 * of the `smithy.protocoltests.rpcv2Cbor` model used by the reference generated
 * client (`private/smithy-rpcv2-cbor-schema`). It exercises every shape category
 * consumed by the schema builder: simple scalars, lists (of simple and of
 * structure), dense and sparse maps, recursive structures, unions, errors, and
 * operations with and without I/O.
 *
 * @internal
 */
export const rpcv2CborAst: SmithyAst = {
  smithy: "2.0",
  shapes: {
    "smithy.protocoltests.rpcv2Cbor#RpcV2Protocol": {
      type: "service",
      version: "2020-07-14",
      operations: [
        { target: "smithy.protocoltests.rpcv2Cbor#EmptyInputOutput" },
        { target: "smithy.protocoltests.rpcv2Cbor#SimpleScalarProperties" },
        { target: "smithy.protocoltests.rpcv2Cbor#RecursiveShapes" },
        { target: "smithy.protocoltests.rpcv2Cbor#RpcV2CborLists" },
        { target: "smithy.protocoltests.rpcv2Cbor#RpcV2CborSparseMaps" },
        { target: "smithy.protocoltests.rpcv2Cbor#GreetingWithErrors" },
      ],
      traits: {
        "smithy.protocols#rpcv2Cbor": {},
        // Basic (non-regional) default endpoint ruleset mirroring
        // smithy-typescript's AddDefaultEndpointRuleSet.DEFAULT_RULESET. The
        // rpcv2Cbor protocol-test service models no endpoints, so this lets the
        // rules engine honor a caller-supplied `endpoint` config value.
        "smithy.rules#endpointRuleSet": {
          version: "1.0",
          parameters: {
            Endpoint: {
              type: "string",
              builtIn: "SDK::Endpoint",
              documentation: "Endpoint used for making requests. Should be formatted as a URI.",
            },
          },
          rules: [
            {
              conditions: [{ fn: "isSet", argv: [{ ref: "Endpoint" }] }],
              endpoint: { url: { ref: "Endpoint" } },
              type: "endpoint",
            },
            {
              conditions: [],
              error: "(default endpointRuleSet) endpoint is not set - you must configure an endpoint.",
              type: "error",
            },
          ],
        },
      },
    },

    "smithy.protocoltests.rpcv2Cbor#EmptyInputOutput": {
      type: "operation",
      input: { target: "smithy.protocoltests.rpcv2Cbor#EmptyStructure" },
      output: { target: "smithy.protocoltests.rpcv2Cbor#EmptyStructure" },
    },
    "smithy.protocoltests.rpcv2Cbor#EmptyStructure": {
      type: "structure",
      members: {},
    },

    "smithy.protocoltests.rpcv2Cbor#SimpleScalarProperties": {
      type: "operation",
      input: { target: "smithy.protocoltests.rpcv2Cbor#SimpleScalarStructure" },
      output: { target: "smithy.protocoltests.rpcv2Cbor#SimpleScalarStructure" },
    },
    "smithy.protocoltests.rpcv2Cbor#SimpleScalarStructure": {
      type: "structure",
      members: {
        trueBooleanValue: { target: "smithy.api#Boolean" },
        byteValue: { target: "smithy.api#Byte" },
        doubleValue: { target: "smithy.api#Double" },
        stringValue: { target: "smithy.api#String" },
        blobValue: { target: "smithy.api#Blob" },
      },
    },

    "smithy.protocoltests.rpcv2Cbor#RecursiveShapes": {
      type: "operation",
      input: { target: "smithy.protocoltests.rpcv2Cbor#RecursiveShapesInputOutput" },
      output: { target: "smithy.protocoltests.rpcv2Cbor#RecursiveShapesInputOutput" },
    },
    "smithy.protocoltests.rpcv2Cbor#RecursiveShapesInputOutput": {
      type: "structure",
      members: {
        nested: { target: "smithy.protocoltests.rpcv2Cbor#RecursiveShapesInputOutputNested1" },
      },
    },
    "smithy.protocoltests.rpcv2Cbor#RecursiveShapesInputOutputNested1": {
      type: "structure",
      members: {
        foo: { target: "smithy.api#String" },
        nested: { target: "smithy.protocoltests.rpcv2Cbor#RecursiveShapesInputOutputNested2" },
      },
    },
    "smithy.protocoltests.rpcv2Cbor#RecursiveShapesInputOutputNested2": {
      type: "structure",
      members: {
        bar: { target: "smithy.api#String" },
        recursiveMember: { target: "smithy.protocoltests.rpcv2Cbor#RecursiveShapesInputOutputNested1" },
      },
    },

    "smithy.protocoltests.rpcv2Cbor#RpcV2CborLists": {
      type: "operation",
      input: { target: "smithy.protocoltests.rpcv2Cbor#RpcV2CborListInputOutput" },
      output: { target: "smithy.protocoltests.rpcv2Cbor#RpcV2CborListInputOutput" },
      traits: { "smithy.api#idempotent": {} },
    },
    "smithy.protocoltests.rpcv2Cbor#RpcV2CborListInputOutput": {
      type: "structure",
      members: {
        stringList: { target: "smithy.protocoltests.rpcv2Cbor#StringList" },
        structureList: { target: "smithy.protocoltests.rpcv2Cbor#StructureList" },
      },
    },
    "smithy.protocoltests.rpcv2Cbor#StringList": {
      type: "list",
      member: { target: "smithy.api#String" },
    },
    "smithy.protocoltests.rpcv2Cbor#StructureList": {
      type: "list",
      member: { target: "smithy.protocoltests.rpcv2Cbor#StructureListMember" },
    },
    "smithy.protocoltests.rpcv2Cbor#StructureListMember": {
      type: "structure",
      members: {
        a: { target: "smithy.api#String" },
        b: { target: "smithy.api#String" },
      },
    },

    "smithy.protocoltests.rpcv2Cbor#RpcV2CborSparseMaps": {
      type: "operation",
      input: { target: "smithy.protocoltests.rpcv2Cbor#RpcV2CborSparseMapsInputOutput" },
      output: { target: "smithy.protocoltests.rpcv2Cbor#RpcV2CborSparseMapsInputOutput" },
    },
    "smithy.protocoltests.rpcv2Cbor#RpcV2CborSparseMapsInputOutput": {
      type: "structure",
      members: {
        sparseStringMap: { target: "smithy.protocoltests.rpcv2Cbor#SparseStringMap" },
        sparseStructMap: { target: "smithy.protocoltests.rpcv2Cbor#SparseStructMap" },
      },
    },
    "smithy.protocoltests.rpcv2Cbor#SparseStringMap": {
      type: "map",
      key: { target: "smithy.api#String" },
      value: { target: "smithy.api#String" },
      traits: { "smithy.api#sparse": {} },
    },
    "smithy.protocoltests.rpcv2Cbor#SparseStructMap": {
      type: "map",
      key: { target: "smithy.api#String" },
      value: { target: "smithy.protocoltests.rpcv2Cbor#GreetingStruct" },
      traits: { "smithy.api#sparse": {} },
    },
    "smithy.protocoltests.rpcv2Cbor#GreetingStruct": {
      type: "structure",
      members: {
        hi: { target: "smithy.api#String" },
      },
    },

    "smithy.protocoltests.rpcv2Cbor#GreetingWithErrors": {
      type: "operation",
      output: { target: "smithy.protocoltests.rpcv2Cbor#GreetingWithErrorsOutput" },
      errors: [
        { target: "smithy.protocoltests.rpcv2Cbor#InvalidGreeting" },
        { target: "smithy.protocoltests.rpcv2Cbor#ComplexError" },
      ],
      traits: { "smithy.api#idempotent": {} },
    },
    "smithy.protocoltests.rpcv2Cbor#GreetingWithErrorsOutput": {
      type: "structure",
      members: {
        greeting: { target: "smithy.api#String" },
      },
    },
    "smithy.protocoltests.rpcv2Cbor#InvalidGreeting": {
      type: "structure",
      members: {
        Message: { target: "smithy.api#String" },
      },
      traits: { "smithy.api#error": "client" },
    },
    "smithy.protocoltests.rpcv2Cbor#ComplexError": {
      type: "structure",
      members: {
        TopLevel: { target: "smithy.api#String" },
        Nested: { target: "smithy.protocoltests.rpcv2Cbor#ComplexNestedErrorData" },
      },
      traits: { "smithy.api#error": "client" },
    },
    "smithy.protocoltests.rpcv2Cbor#ComplexNestedErrorData": {
      type: "structure",
      members: {
        Foo: { target: "smithy.api#String" },
      },
    },
  },
};
