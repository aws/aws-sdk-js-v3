// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { DocumentType as __DocumentType } from "@smithy/types";

import { BedrockAgentRuntimeServiceException as __BaseException } from "./BedrockAgentRuntimeServiceException";

/**
 * <p>The request is denied because of missing access permissions. Check your permissions and retry your request.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const ExecutionType = {
  LAMBDA: "LAMBDA",
  RETURN_CONTROL: "RETURN_CONTROL",
} as const;

/**
 * @public
 */
export type ExecutionType = (typeof ExecutionType)[keyof typeof ExecutionType];

/**
 * <p>A parameter for the API request or function.</p>
 * @public
 */
export interface Parameter {
  /**
   * <p>The name of the parameter.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The type of the parameter.</p>
   * @public
   */
  type?: string | undefined;

  /**
   * <p>The value of the parameter.</p>
   * @public
   */
  value?: string | undefined;
}

/**
 * <p>The parameters in the API request body.</p>
 * @public
 */
export interface RequestBody {
  /**
   * <p>The content in the request body.</p>
   * @public
   */
  content?: Record<string, Parameter[]> | undefined;
}

/**
 * <p>Contains information about the action group being invoked. For more information about the possible structures, see the InvocationInput tab in <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/trace-orchestration.html">OrchestrationTrace</a> in the Amazon Bedrock User Guide.</p>
 * @public
 */
export interface ActionGroupInvocationInput {
  /**
   * <p>The name of the action group.</p>
   * @public
   */
  actionGroupName?: string | undefined;

  /**
   * <p>The API method being used, based off the action group.</p>
   * @public
   */
  verb?: string | undefined;

  /**
   * <p>The path to the API to call, based off the action group.</p>
   * @public
   */
  apiPath?: string | undefined;

  /**
   * <p>The parameters in the Lambda input event.</p>
   * @public
   */
  parameters?: Parameter[] | undefined;

  /**
   * <p>The parameters in the request body for the Lambda input event.</p>
   * @public
   */
  requestBody?: RequestBody | undefined;

  /**
   * <p>The function in the action group to call.</p>
   * @public
   */
  function?: string | undefined;

  /**
   * <p>How fulfillment of the action is handled. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/action-handle.html">Handling fulfillment of the action</a>.</p>
   * @public
   */
  executionType?: ExecutionType | undefined;

  /**
   * <p>The unique identifier of the invocation. Only returned if the <code>executionType</code> is <code>RETURN_CONTROL</code>.</p>
   * @public
   */
  invocationId?: string | undefined;
}

/**
 * <p>Contains the JSON-formatted string returned by the API invoked by the action group.</p>
 * @public
 */
export interface ActionGroupInvocationOutput {
  /**
   * <p>The JSON-formatted string returned by the API invoked by the action group.</p>
   * @public
   */
  text?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ActionInvocationType = {
  RESULT: "RESULT",
  USER_CONFIRMATION: "USER_CONFIRMATION",
  USER_CONFIRMATION_AND_RESULT: "USER_CONFIRMATION_AND_RESULT",
} as const;

/**
 * @public
 */
export type ActionInvocationType = (typeof ActionInvocationType)[keyof typeof ActionInvocationType];

/**
 * <p>There was an issue with a dependency due to a server issue. Retry your request.</p>
 * @public
 */
export class BadGatewayException extends __BaseException {
  readonly name: "BadGatewayException" = "BadGatewayException";
  readonly $fault: "server" = "server";
  /**
   * <p>The name of the dependency that caused the issue, such as Amazon Bedrock, Lambda, or STS.</p>
   * @public
   */
  resourceName?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadGatewayException, __BaseException>) {
    super({
      name: "BadGatewayException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, BadGatewayException.prototype);
    this.resourceName = opts.resourceName;
  }
}

/**
 * <p>There was a conflict performing an operation. Resolve the conflict and retry your request.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
  }
}

/**
 * <p>There was an issue with a dependency. Check the resource configurations and retry the request.</p>
 * @public
 */
export class DependencyFailedException extends __BaseException {
  readonly name: "DependencyFailedException" = "DependencyFailedException";
  readonly $fault: "client" = "client";
  /**
   * <p>The name of the dependency that caused the issue, such as Amazon Bedrock, Lambda, or STS.</p>
   * @public
   */
  resourceName?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DependencyFailedException, __BaseException>) {
    super({
      name: "DependencyFailedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DependencyFailedException.prototype);
    this.resourceName = opts.resourceName;
  }
}

/**
 * <p>An internal server error occurred. Retry your request.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
  }
}

/**
 * <p>Contains information about an input into the flow.</p>
 * @public
 */
export type FlowInputContent = FlowInputContent.DocumentMember | FlowInputContent.$UnknownMember;

/**
 * @public
 */
export namespace FlowInputContent {
  /**
   * <p>The input to send to the prompt flow input node.</p>
   * @public
   */
  export interface DocumentMember {
    document: __DocumentType;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    document?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    document: (value: __DocumentType) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: FlowInputContent, visitor: Visitor<T>): T => {
    if (value.document !== undefined) return visitor.document(value.document);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Contains information about an input into the prompt flow and where to send it.</p>
 * @public
 */
export interface FlowInput {
  /**
   * <p>The name of the flow input node that begins the prompt flow.</p>
   * @public
   */
  nodeName: string | undefined;

  /**
   * <p>The name of the output from the flow input node that begins the prompt flow.</p>
   * @public
   */
  nodeOutputName: string | undefined;

  /**
   * <p>Contains information about an input into the prompt flow.</p>
   * @public
   */
  content: FlowInputContent | undefined;
}

/**
 * @public
 */
export interface InvokeFlowRequest {
  /**
   * <p>The unique identifier of the flow.</p>
   * @public
   */
  flowIdentifier: string | undefined;

  /**
   * <p>The unique identifier of the flow alias.</p>
   * @public
   */
  flowAliasIdentifier: string | undefined;

  /**
   * <p>A list of objects, each containing information about an input into the flow.</p>
   * @public
   */
  inputs: FlowInput[] | undefined;

  /**
   * <p>Specifies whether to return the trace for the flow or not. Traces track inputs and outputs for nodes in the flow. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/flows-trace.html">Track each step in your prompt flow by viewing its trace in Amazon Bedrock</a>.</p>
   * @public
   */
  enableTrace?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const FlowCompletionReason = {
  SUCCESS: "SUCCESS",
} as const;

/**
 * @public
 */
export type FlowCompletionReason = (typeof FlowCompletionReason)[keyof typeof FlowCompletionReason];

/**
 * <p>Contains information about why a flow completed.</p>
 * @public
 */
export interface FlowCompletionEvent {
  /**
   * <p>The reason that the flow completed.</p>
   * @public
   */
  completionReason: FlowCompletionReason | undefined;
}

/**
 * <p>Contains information about the content in an output from prompt flow invocation.</p>
 * @public
 */
export type FlowOutputContent = FlowOutputContent.DocumentMember | FlowOutputContent.$UnknownMember;

/**
 * @public
 */
export namespace FlowOutputContent {
  /**
   * <p>The content in the output.</p>
   * @public
   */
  export interface DocumentMember {
    document: __DocumentType;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    document?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    document: (value: __DocumentType) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: FlowOutputContent, visitor: Visitor<T>): T => {
    if (value.document !== undefined) return visitor.document(value.document);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const NodeType = {
  CONDITION_NODE: "ConditionNode",
  FLOW_INPUT_NODE: "FlowInputNode",
  FLOW_OUTPUT_NODE: "FlowOutputNode",
  KNOWLEDGE_BASE_NODE: "KnowledgeBaseNode",
  LAMBDA_FUNCTION_NODE: "LambdaFunctionNode",
  LEX_NODE: "LexNode",
  PROMPT_NODE: "PromptNode",
} as const;

/**
 * @public
 */
export type NodeType = (typeof NodeType)[keyof typeof NodeType];

/**
 * <p>Contains information about an output from prompt flow invoction.</p>
 * @public
 */
export interface FlowOutputEvent {
  /**
   * <p>The name of the flow output node that the output is from.</p>
   * @public
   */
  nodeName: string | undefined;

  /**
   * <p>The type of the node that the output is from.</p>
   * @public
   */
  nodeType: NodeType | undefined;

  /**
   * <p>The content in the output.</p>
   * @public
   */
  content: FlowOutputContent | undefined;
}

/**
 * <p>Contains information about a condition that was satisfied. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/flows-trace.html">Track each step in your prompt flow by viewing its trace in Amazon Bedrock</a>.</p>
 * @public
 */
export interface FlowTraceCondition {
  /**
   * <p>The name of the condition.</p>
   * @public
   */
  conditionName: string | undefined;
}

/**
 * <p>Contains information about an output from a condition node. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/flows-trace.html">Track each step in your prompt flow by viewing its trace in Amazon Bedrock</a>.</p>
 * @public
 */
export interface FlowTraceConditionNodeResultEvent {
  /**
   * <p>The name of the condition node.</p>
   * @public
   */
  nodeName: string | undefined;

  /**
   * <p>The date and time that the trace was returned.</p>
   * @public
   */
  timestamp: Date | undefined;

  /**
   * <p>An array of objects containing information about the conditions that were satisfied.</p>
   * @public
   */
  satisfiedConditions: FlowTraceCondition[] | undefined;
}

/**
 * <p>Contains the content of the node input. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/flows-trace.html">Track each step in your prompt flow by viewing its trace in Amazon Bedrock</a>.</p>
 * @public
 */
export type FlowTraceNodeInputContent =
  | FlowTraceNodeInputContent.DocumentMember
  | FlowTraceNodeInputContent.$UnknownMember;

/**
 * @public
 */
export namespace FlowTraceNodeInputContent {
  /**
   * <p>The content of the node input.</p>
   * @public
   */
  export interface DocumentMember {
    document: __DocumentType;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    document?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    document: (value: __DocumentType) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: FlowTraceNodeInputContent, visitor: Visitor<T>): T => {
    if (value.document !== undefined) return visitor.document(value.document);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Contains information about a field in the input into a node. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/flows-trace.html">Track each step in your prompt flow by viewing its trace in Amazon Bedrock</a>.</p>
 * @public
 */
export interface FlowTraceNodeInputField {
  /**
   * <p>The name of the node input.</p>
   * @public
   */
  nodeInputName: string | undefined;

  /**
   * <p>The content of the node input.</p>
   * @public
   */
  content: FlowTraceNodeInputContent | undefined;
}

/**
 * <p>Contains information about the input into a node. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/flows-trace.html">Track each step in your prompt flow by viewing its trace in Amazon Bedrock</a>.</p>
 * @public
 */
export interface FlowTraceNodeInputEvent {
  /**
   * <p>The name of the node that received the input.</p>
   * @public
   */
  nodeName: string | undefined;

  /**
   * <p>The date and time that the trace was returned.</p>
   * @public
   */
  timestamp: Date | undefined;

  /**
   * <p>An array of objects containing information about each field in the input.</p>
   * @public
   */
  fields: FlowTraceNodeInputField[] | undefined;
}

/**
 * <p>Contains the content of the node output. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/flows-trace.html">Track each step in your prompt flow by viewing its trace in Amazon Bedrock</a>.</p>
 * @public
 */
export type FlowTraceNodeOutputContent =
  | FlowTraceNodeOutputContent.DocumentMember
  | FlowTraceNodeOutputContent.$UnknownMember;

/**
 * @public
 */
export namespace FlowTraceNodeOutputContent {
  /**
   * <p>The content of the node output.</p>
   * @public
   */
  export interface DocumentMember {
    document: __DocumentType;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    document?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    document: (value: __DocumentType) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: FlowTraceNodeOutputContent, visitor: Visitor<T>): T => {
    if (value.document !== undefined) return visitor.document(value.document);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Contains information about a field in the output from a node. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/flows-trace.html">Track each step in your prompt flow by viewing its trace in Amazon Bedrock</a>.</p>
 * @public
 */
export interface FlowTraceNodeOutputField {
  /**
   * <p>The name of the node output.</p>
   * @public
   */
  nodeOutputName: string | undefined;

  /**
   * <p>The content of the node output.</p>
   * @public
   */
  content: FlowTraceNodeOutputContent | undefined;
}

/**
 * <p>Contains information about the output from a node. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/flows-trace.html">Track each step in your prompt flow by viewing its trace in Amazon Bedrock</a>.</p>
 * @public
 */
export interface FlowTraceNodeOutputEvent {
  /**
   * <p>The name of the node that yielded the output.</p>
   * @public
   */
  nodeName: string | undefined;

  /**
   * <p>The date and time that the trace was returned.</p>
   * @public
   */
  timestamp: Date | undefined;

  /**
   * <p>An array of objects containing information about each field in the output.</p>
   * @public
   */
  fields: FlowTraceNodeOutputField[] | undefined;
}

/**
 * <p>Contains information about an input or output for a node in the flow. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/flows-trace.html">Track each step in your prompt flow by viewing its trace in Amazon Bedrock</a>.</p>
 * @public
 */
export type FlowTrace =
  | FlowTrace.ConditionNodeResultTraceMember
  | FlowTrace.NodeInputTraceMember
  | FlowTrace.NodeOutputTraceMember
  | FlowTrace.$UnknownMember;

/**
 * @public
 */
export namespace FlowTrace {
  /**
   * <p>Contains information about the input into a node.</p>
   * @public
   */
  export interface NodeInputTraceMember {
    nodeInputTrace: FlowTraceNodeInputEvent;
    nodeOutputTrace?: never;
    conditionNodeResultTrace?: never;
    $unknown?: never;
  }

  /**
   * <p>Contains information about the output from a node.</p>
   * @public
   */
  export interface NodeOutputTraceMember {
    nodeInputTrace?: never;
    nodeOutputTrace: FlowTraceNodeOutputEvent;
    conditionNodeResultTrace?: never;
    $unknown?: never;
  }

  /**
   * <p>Contains information about an output from a condition node.</p>
   * @public
   */
  export interface ConditionNodeResultTraceMember {
    nodeInputTrace?: never;
    nodeOutputTrace?: never;
    conditionNodeResultTrace: FlowTraceConditionNodeResultEvent;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    nodeInputTrace?: never;
    nodeOutputTrace?: never;
    conditionNodeResultTrace?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    nodeInputTrace: (value: FlowTraceNodeInputEvent) => T;
    nodeOutputTrace: (value: FlowTraceNodeOutputEvent) => T;
    conditionNodeResultTrace: (value: FlowTraceConditionNodeResultEvent) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: FlowTrace, visitor: Visitor<T>): T => {
    if (value.nodeInputTrace !== undefined) return visitor.nodeInputTrace(value.nodeInputTrace);
    if (value.nodeOutputTrace !== undefined) return visitor.nodeOutputTrace(value.nodeOutputTrace);
    if (value.conditionNodeResultTrace !== undefined)
      return visitor.conditionNodeResultTrace(value.conditionNodeResultTrace);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Contains information about a trace, which tracks an input or output for a node in the flow. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/flows-trace.html">Track each step in your prompt flow by viewing its trace in Amazon Bedrock</a>.</p>
 * @public
 */
export interface FlowTraceEvent {
  /**
   * <p>The trace object containing information about an input or output for a node in the flow.</p>
   * @public
   */
  trace: FlowTrace | undefined;
}

/**
 * <p>The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
  }
}

/**
 * <p>The number of requests exceeds the service quota. Resubmit your request later.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
  }
}

/**
 * <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
  }
}

/**
 * <p>Input validation failed. Check your request parameters and retry the request.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
  }
}

/**
 * <p>The output of the flow.</p>
 * @public
 */
export type FlowResponseStream =
  | FlowResponseStream.AccessDeniedExceptionMember
  | FlowResponseStream.BadGatewayExceptionMember
  | FlowResponseStream.ConflictExceptionMember
  | FlowResponseStream.DependencyFailedExceptionMember
  | FlowResponseStream.FlowCompletionEventMember
  | FlowResponseStream.FlowOutputEventMember
  | FlowResponseStream.FlowTraceEventMember
  | FlowResponseStream.InternalServerExceptionMember
  | FlowResponseStream.ResourceNotFoundExceptionMember
  | FlowResponseStream.ServiceQuotaExceededExceptionMember
  | FlowResponseStream.ThrottlingExceptionMember
  | FlowResponseStream.ValidationExceptionMember
  | FlowResponseStream.$UnknownMember;

/**
 * @public
 */
export namespace FlowResponseStream {
  /**
   * <p>Contains information about an output from flow invocation.</p>
   * @public
   */
  export interface FlowOutputEventMember {
    flowOutputEvent: FlowOutputEvent;
    flowCompletionEvent?: never;
    flowTraceEvent?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    $unknown?: never;
  }

  /**
   * <p>Contains information about why the flow completed.</p>
   * @public
   */
  export interface FlowCompletionEventMember {
    flowOutputEvent?: never;
    flowCompletionEvent: FlowCompletionEvent;
    flowTraceEvent?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    $unknown?: never;
  }

  /**
   * <p>Contains information about a trace, which tracks an input or output for a node in the flow.</p>
   * @public
   */
  export interface FlowTraceEventMember {
    flowOutputEvent?: never;
    flowCompletionEvent?: never;
    flowTraceEvent: FlowTraceEvent;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    $unknown?: never;
  }

  /**
   * <p>An internal server error occurred. Retry your request.</p>
   * @public
   */
  export interface InternalServerExceptionMember {
    flowOutputEvent?: never;
    flowCompletionEvent?: never;
    flowTraceEvent?: never;
    internalServerException: InternalServerException;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    $unknown?: never;
  }

  /**
   * <p>Input validation failed. Check your request parameters and retry the request.</p>
   * @public
   */
  export interface ValidationExceptionMember {
    flowOutputEvent?: never;
    flowCompletionEvent?: never;
    flowTraceEvent?: never;
    internalServerException?: never;
    validationException: ValidationException;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    $unknown?: never;
  }

  /**
   * <p>The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.</p>
   * @public
   */
  export interface ResourceNotFoundExceptionMember {
    flowOutputEvent?: never;
    flowCompletionEvent?: never;
    flowTraceEvent?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException: ResourceNotFoundException;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    $unknown?: never;
  }

  /**
   * <p>The number of requests exceeds the service quota. Resubmit your request later.</p>
   * @public
   */
  export interface ServiceQuotaExceededExceptionMember {
    flowOutputEvent?: never;
    flowCompletionEvent?: never;
    flowTraceEvent?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException: ServiceQuotaExceededException;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    $unknown?: never;
  }

  /**
   * <p>The number of requests exceeds the limit. Resubmit your request later.</p>
   * @public
   */
  export interface ThrottlingExceptionMember {
    flowOutputEvent?: never;
    flowCompletionEvent?: never;
    flowTraceEvent?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException: ThrottlingException;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    $unknown?: never;
  }

  /**
   * <p>The request is denied because of missing access permissions. Check your permissions and retry your request.</p>
   * @public
   */
  export interface AccessDeniedExceptionMember {
    flowOutputEvent?: never;
    flowCompletionEvent?: never;
    flowTraceEvent?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException: AccessDeniedException;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    $unknown?: never;
  }

  /**
   * <p>There was a conflict performing an operation. Resolve the conflict and retry your request.</p>
   * @public
   */
  export interface ConflictExceptionMember {
    flowOutputEvent?: never;
    flowCompletionEvent?: never;
    flowTraceEvent?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException: ConflictException;
    dependencyFailedException?: never;
    badGatewayException?: never;
    $unknown?: never;
  }

  /**
   * <p>There was an issue with a dependency. Check the resource configurations and retry the request.</p>
   * @public
   */
  export interface DependencyFailedExceptionMember {
    flowOutputEvent?: never;
    flowCompletionEvent?: never;
    flowTraceEvent?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException: DependencyFailedException;
    badGatewayException?: never;
    $unknown?: never;
  }

  /**
   * <p>There was an issue with a dependency due to a server issue. Retry your request.</p>
   * @public
   */
  export interface BadGatewayExceptionMember {
    flowOutputEvent?: never;
    flowCompletionEvent?: never;
    flowTraceEvent?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException: BadGatewayException;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    flowOutputEvent?: never;
    flowCompletionEvent?: never;
    flowTraceEvent?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    flowOutputEvent: (value: FlowOutputEvent) => T;
    flowCompletionEvent: (value: FlowCompletionEvent) => T;
    flowTraceEvent: (value: FlowTraceEvent) => T;
    internalServerException: (value: InternalServerException) => T;
    validationException: (value: ValidationException) => T;
    resourceNotFoundException: (value: ResourceNotFoundException) => T;
    serviceQuotaExceededException: (value: ServiceQuotaExceededException) => T;
    throttlingException: (value: ThrottlingException) => T;
    accessDeniedException: (value: AccessDeniedException) => T;
    conflictException: (value: ConflictException) => T;
    dependencyFailedException: (value: DependencyFailedException) => T;
    badGatewayException: (value: BadGatewayException) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: FlowResponseStream, visitor: Visitor<T>): T => {
    if (value.flowOutputEvent !== undefined) return visitor.flowOutputEvent(value.flowOutputEvent);
    if (value.flowCompletionEvent !== undefined) return visitor.flowCompletionEvent(value.flowCompletionEvent);
    if (value.flowTraceEvent !== undefined) return visitor.flowTraceEvent(value.flowTraceEvent);
    if (value.internalServerException !== undefined)
      return visitor.internalServerException(value.internalServerException);
    if (value.validationException !== undefined) return visitor.validationException(value.validationException);
    if (value.resourceNotFoundException !== undefined)
      return visitor.resourceNotFoundException(value.resourceNotFoundException);
    if (value.serviceQuotaExceededException !== undefined)
      return visitor.serviceQuotaExceededException(value.serviceQuotaExceededException);
    if (value.throttlingException !== undefined) return visitor.throttlingException(value.throttlingException);
    if (value.accessDeniedException !== undefined) return visitor.accessDeniedException(value.accessDeniedException);
    if (value.conflictException !== undefined) return visitor.conflictException(value.conflictException);
    if (value.dependencyFailedException !== undefined)
      return visitor.dependencyFailedException(value.dependencyFailedException);
    if (value.badGatewayException !== undefined) return visitor.badGatewayException(value.badGatewayException);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface InvokeFlowResponse {
  /**
   * <p>The output of the flow, returned as a stream. If there's an error, the error is returned.</p>
   * @public
   */
  responseStream: AsyncIterable<FlowResponseStream> | undefined;
}

/**
 * <p>The property contains the file to chat with, along with its attributes.</p>
 * @public
 */
export interface ByteContentFile {
  /**
   * <p>The MIME type of data contained in the file used for chat.</p>
   * @public
   */
  mediaType: string | undefined;

  /**
   * <p>The raw bytes of the file to attach. The maximum size of all files that is attached is 10MB. You can attach a maximum of 5 files. </p>
   * @public
   */
  data: Uint8Array | undefined;
}

/**
 * <p>Contains details of the s3 object where the source file is located.</p>
 * @public
 */
export interface S3ObjectFile {
  /**
   * <p>The uri of the s3 object.</p>
   * @public
   */
  uri: string | undefined;
}

/**
 * @public
 * @enum
 */
export const FileSourceType = {
  BYTE_CONTENT: "BYTE_CONTENT",
  S3: "S3",
} as const;

/**
 * @public
 */
export type FileSourceType = (typeof FileSourceType)[keyof typeof FileSourceType];

/**
 * <p>The source file of the content contained in the wrapper object.</p>
 * @public
 */
export interface FileSource {
  /**
   * <p>The source type of the files to attach.</p>
   * @public
   */
  sourceType: FileSourceType | undefined;

  /**
   * <p>The s3 location of the files to attach.</p>
   * @public
   */
  s3Location?: S3ObjectFile | undefined;

  /**
   * <p>The data and the text of the attached files.</p>
   * @public
   */
  byteContent?: ByteContentFile | undefined;
}

/**
 * @public
 * @enum
 */
export const FileUseCase = {
  CHAT: "CHAT",
  CODE_INTERPRETER: "CODE_INTERPRETER",
} as const;

/**
 * @public
 */
export type FileUseCase = (typeof FileUseCase)[keyof typeof FileUseCase];

/**
 * <p>Contains details of the source files.</p>
 * @public
 */
export interface InputFile {
  /**
   * <p>The name of the source file.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Specifies where the files are located.</p>
   * @public
   */
  source: FileSource | undefined;

  /**
   * <p>Specifies how the source files will be used by the code interpreter.</p>
   * @public
   */
  useCase: FileUseCase | undefined;
}

/**
 * <p>Specifies the name that the metadata attribute must match and the value to which to compare the value of the metadata attribute. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/kb-test-config.html">Query configurations</a>.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_RequestSyntax">RetrieveAndGenerate request</a>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export interface FilterAttribute {
  /**
   * <p>The name that the metadata attribute must match.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The value to whcih to compare the value of the metadata attribute.</p>
   * @public
   */
  value: __DocumentType | undefined;
}

/**
 * @public
 * @enum
 */
export const SearchType = {
  HYBRID: "HYBRID",
  SEMANTIC: "SEMANTIC",
} as const;

/**
 * @public
 */
export type SearchType = (typeof SearchType)[keyof typeof SearchType];

/**
 * @public
 * @enum
 */
export const ConfirmationState = {
  CONFIRM: "CONFIRM",
  DENY: "DENY",
} as const;

/**
 * @public
 */
export type ConfirmationState = (typeof ConfirmationState)[keyof typeof ConfirmationState];

/**
 * <p>Contains the body of the API response.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>In the <code>returnControlInvocationResults</code> field of the <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html#API_agent-runtime_InvokeAgent_RequestSyntax">InvokeAgent request</a>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export interface ContentBody {
  /**
   * <p>The body of the API response.</p>
   * @public
   */
  body?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ResponseState = {
  FAILURE: "FAILURE",
  REPROMPT: "REPROMPT",
} as const;

/**
 * @public
 */
export type ResponseState = (typeof ResponseState)[keyof typeof ResponseState];

/**
 * <p>Contains information about the API operation that was called from the action group and the response body that was returned.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>In the <code>returnControlInvocationResults</code> of the <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html#API_agent-runtime_InvokeAgent_RequestSyntax">InvokeAgent request</a>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export interface ApiResult {
  /**
   * <p>The action group that the API operation belongs to.</p>
   * @public
   */
  actionGroup: string | undefined;

  /**
   * <p>The HTTP method for the API operation.</p>
   * @public
   */
  httpMethod?: string | undefined;

  /**
   * <p>The path to the API operation.</p>
   * @public
   */
  apiPath?: string | undefined;

  /**
   * <p>Controls the API operations or functions to invoke based on the user confirmation.</p>
   * @public
   */
  confirmationState?: ConfirmationState | undefined;

  /**
   * <p>The response body from the API operation. The key of the object is the content type (currently, only <code>TEXT</code> is supported). The response may be returned directly or from the Lambda function.</p>
   * @public
   */
  responseBody?: Record<string, ContentBody> | undefined;

  /**
   * <p>http status code from API execution response (for example: 200, 400, 500).</p>
   * @public
   */
  httpStatusCode?: number | undefined;

  /**
   * <p>Controls the final response state returned to end user when API/Function execution failed. When this state is FAILURE, the request would fail with dependency failure exception. When this state is REPROMPT, the API/function response will be sent to model for re-prompt</p>
   * @public
   */
  responseState?: ResponseState | undefined;
}

/**
 * <p>Contains information about the function that was called from the action group and the response that was returned.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>In the <code>returnControlInvocationResults</code> of the <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html#API_agent-runtime_InvokeAgent_RequestSyntax">InvokeAgent request</a>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export interface FunctionResult {
  /**
   * <p>The action group that the function belongs to.</p>
   * @public
   */
  actionGroup: string | undefined;

  /**
   * <p>Contains the user confirmation information about the function that was called.</p>
   * @public
   */
  confirmationState?: ConfirmationState | undefined;

  /**
   * <p>The name of the function that was called.</p>
   * @public
   */
  function?: string | undefined;

  /**
   * <p>The response from the function call using the parameters. The key of the object is the content type (currently, only <code>TEXT</code> is supported). The response may be returned directly or from the Lambda function.</p>
   * @public
   */
  responseBody?: Record<string, ContentBody> | undefined;

  /**
   * <p>Controls the final response state returned to end user when API/Function execution failed. When this state is FAILURE, the request would fail with dependency failure exception. When this state is REPROMPT, the API/function response will be sent to model for re-prompt</p>
   * @public
   */
  responseState?: ResponseState | undefined;
}

/**
 * <p>A result from the invocation of an action. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-returncontrol.html">Return control to the agent developer</a> and <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-session-state.html">Control session context</a>.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html#API_agent-runtime_InvokeAgent_RequestSyntax">InvokeAgent request</a>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export type InvocationResultMember =
  | InvocationResultMember.ApiResultMember
  | InvocationResultMember.FunctionResultMember
  | InvocationResultMember.$UnknownMember;

/**
 * @public
 */
export namespace InvocationResultMember {
  /**
   * <p>The result from the API response from the action group invocation.</p>
   * @public
   */
  export interface ApiResultMember {
    apiResult: ApiResult;
    functionResult?: never;
    $unknown?: never;
  }

  /**
   * <p>The result from the function from the action group invocation.</p>
   * @public
   */
  export interface FunctionResultMember {
    apiResult?: never;
    functionResult: FunctionResult;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    apiResult?: never;
    functionResult?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    apiResult: (value: ApiResult) => T;
    functionResult: (value: FunctionResult) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: InvocationResultMember, visitor: Visitor<T>): T => {
    if (value.apiResult !== undefined) return visitor.apiResult(value.apiResult);
    if (value.functionResult !== undefined) return visitor.functionResult(value.functionResult);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Contains information about where the text with a citation begins and ends in the generated output.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_ResponseSyntax">RetrieveAndGenerate response</a> – in the <code>span</code> field</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html#API_agent-runtime_InvokeAgent_ResponseSyntax">InvokeAgent response</a> – in the <code>span</code> field</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface Span {
  /**
   * <p>Where the text with a citation starts in the generated output.</p>
   * @public
   */
  start?: number | undefined;

  /**
   * <p>Where the text with a citation ends in the generated output.</p>
   * @public
   */
  end?: number | undefined;
}

/**
 * <p>Contains the part of the generated text that contains a citation, alongside where it begins and ends.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_ResponseSyntax">RetrieveAndGenerate response</a> – in the <code>textResponsePart</code> field</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html#API_agent-runtime_InvokeAgent_ResponseSyntax">InvokeAgent response</a> – in the <code>textResponsePart</code> field</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface TextResponsePart {
  /**
   * <p>The part of the generated text that contains a citation.</p>
   * @public
   */
  text?: string | undefined;

  /**
   * <p>Contains information about where the text with a citation begins and ends in the generated output.</p>
   * @public
   */
  span?: Span | undefined;
}

/**
 * <p>Contains metadata about a part of the generated response that is accompanied by a citation.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html#API_agent-runtime_InvokeAgent_ResponseSyntax">InvokeAgent response</a> – in the <code>generatedResponsePart</code> field</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_ResponseSyntax">RetrieveAndGenerate response</a> – in the <code>generatedResponsePart</code> field</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface GeneratedResponsePart {
  /**
   * <p>Contains metadata about a textual part of the generated response that is accompanied by a citation.</p>
   * @public
   */
  textResponsePart?: TextResponsePart | undefined;
}

/**
 * <p>Contains the cited text from the data source.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_Retrieve.html#API_agent-runtime_Retrieve_ResponseSyntax">Retrieve response</a> – in the <code>content</code> field</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_ResponseSyntax">RetrieveAndGenerate response</a> – in the <code>content</code> field</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html#API_agent-runtime_InvokeAgent_ResponseSyntax">InvokeAgent response</a> – in the <code>content</code> field</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface RetrievalResultContent {
  /**
   * <p>The cited text from the data source.</p>
   * @public
   */
  text: string | undefined;
}

/**
 * <p>The Confluence data source location.</p>
 * @public
 */
export interface RetrievalResultConfluenceLocation {
  /**
   * <p>The Confluence host URL for the data source location.</p>
   * @public
   */
  url?: string | undefined;
}

/**
 * <p>The S3 data source location.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_Retrieve.html#API_agent-runtime_Retrieve_ResponseSyntax">Retrieve response</a> – in the <code>s3Location</code> field</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_ResponseSyntax">RetrieveAndGenerate response</a> – in the <code>s3Location</code> field</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html#API_agent-runtime_InvokeAgent_ResponseSyntax">InvokeAgent response</a> – in the <code>s3Location</code> field</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface RetrievalResultS3Location {
  /**
   * <p>The S3 URI for the data source location.</p>
   * @public
   */
  uri?: string | undefined;
}

/**
 * <p>The Salesforce data source location.</p>
 * @public
 */
export interface RetrievalResultSalesforceLocation {
  /**
   * <p>The Salesforce host URL for the data source location.</p>
   * @public
   */
  url?: string | undefined;
}

/**
 * <p>The SharePoint data source location.</p>
 * @public
 */
export interface RetrievalResultSharePointLocation {
  /**
   * <p>The SharePoint site URL for the data source location.</p>
   * @public
   */
  url?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const RetrievalResultLocationType = {
  CONFLUENCE: "CONFLUENCE",
  S3: "S3",
  SALESFORCE: "SALESFORCE",
  SHAREPOINT: "SHAREPOINT",
  WEB: "WEB",
} as const;

/**
 * @public
 */
export type RetrievalResultLocationType =
  (typeof RetrievalResultLocationType)[keyof typeof RetrievalResultLocationType];

/**
 * <p>The web URL/URLs data source location.</p>
 * @public
 */
export interface RetrievalResultWebLocation {
  /**
   * <p>The web URL/URLs for the data source location.</p>
   * @public
   */
  url?: string | undefined;
}

/**
 * <p>Contains information about the data source location.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_Retrieve.html#API_agent-runtime_Retrieve_ResponseSyntax">Retrieve response</a> – in the <code>location</code> field</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_ResponseSyntax">RetrieveAndGenerate response</a> – in the <code>location</code> field</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html#API_agent-runtime_InvokeAgent_ResponseSyntax">InvokeAgent response</a> – in the <code>locatino</code> field</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface RetrievalResultLocation {
  /**
   * <p>The type of data source location.</p>
   * @public
   */
  type: RetrievalResultLocationType | undefined;

  /**
   * <p>The S3 data source location.</p>
   * @public
   */
  s3Location?: RetrievalResultS3Location | undefined;

  /**
   * <p>The web URL/URLs data source location.</p>
   * @public
   */
  webLocation?: RetrievalResultWebLocation | undefined;

  /**
   * <p>The Confluence data source location.</p>
   * @public
   */
  confluenceLocation?: RetrievalResultConfluenceLocation | undefined;

  /**
   * <p>The Salesforce data source location.</p>
   * @public
   */
  salesforceLocation?: RetrievalResultSalesforceLocation | undefined;

  /**
   * <p>The SharePoint data source location.</p>
   * @public
   */
  sharePointLocation?: RetrievalResultSharePointLocation | undefined;
}

/**
 * <p>Contains metadata about a source cited for the generated response.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_ResponseSyntax">RetrieveAndGenerate response</a> – in the <code>retrievedReferences</code> field</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html#API_agent-runtime_InvokeAgent_ResponseSyntax">InvokeAgent response</a> – in the <code>retrievedReferences</code> field</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface RetrievedReference {
  /**
   * <p>Contains the cited text from the data source.</p>
   * @public
   */
  content?: RetrievalResultContent | undefined;

  /**
   * <p>Contains information about the location of the data source.</p>
   * @public
   */
  location?: RetrievalResultLocation | undefined;

  /**
   * <p>Contains metadata attributes and their values for the file in the data source. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-ds.html#kb-ds-metadata">Metadata and filtering</a>.</p>
   * @public
   */
  metadata?: Record<string, __DocumentType> | undefined;
}

/**
 * <p>An object containing a segment of the generated response that is based on a source in the knowledge base, alongside information about the source.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html#API_agent-runtime_InvokeAgent_ResponseSyntax">InvokeAgent response</a> – in the <code>citations</code> field</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_ResponseSyntax">RetrieveAndGenerate response</a> – in the <code>citations</code> field</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface Citation {
  /**
   * <p>Contains the generated response and metadata </p>
   * @public
   */
  generatedResponsePart?: GeneratedResponsePart | undefined;

  /**
   * <p>Contains metadata about the sources cited for the generated response.</p>
   * @public
   */
  retrievedReferences?: RetrievedReference[] | undefined;
}

/**
 * <p>Contains citations for a part of an agent response.</p>
 * @public
 */
export interface Attribution {
  /**
   * <p>A list of citations and related information for a part of an agent response.</p>
   * @public
   */
  citations?: Citation[] | undefined;
}

/**
 * <p>Contains a part of an agent response and citations for it.</p>
 * @public
 */
export interface PayloadPart {
  /**
   * <p>A part of the agent response in bytes.</p>
   * @public
   */
  bytes?: Uint8Array | undefined;

  /**
   * <p>Contains citations for a part of an agent response.</p>
   * @public
   */
  attribution?: Attribution | undefined;
}

/**
 * <p>Contains details of the response from code interpreter.</p>
 * @public
 */
export interface OutputFile {
  /**
   * <p>The name of the file containing response from code interpreter.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The type of file that contains response from the code interpreter.</p>
   * @public
   */
  type?: string | undefined;

  /**
   * <p>The byte count of files that contains response from code interpreter.</p>
   * @public
   */
  bytes?: Uint8Array | undefined;
}

/**
 * <p>Contains intermediate response for code interpreter if any files have been generated.</p>
 * @public
 */
export interface FilePart {
  /**
   * <p>Files containing intermediate response for the user.</p>
   * @public
   */
  files?: OutputFile[] | undefined;
}

/**
 * <p>Information about a parameter to provide to the API request.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html#API_agent-runtime_InvokeAgent_ResponseSyntax">InvokeAgent response</a>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export interface ApiParameter {
  /**
   * <p>The name of the parameter.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The data type for the parameter.</p>
   * @public
   */
  type?: string | undefined;

  /**
   * <p>The value of the parameter.</p>
   * @public
   */
  value?: string | undefined;
}

/**
 * <p>Contains the parameters in the request body.</p>
 * @public
 */
export interface PropertyParameters {
  /**
   * <p>A list of parameters in the request body.</p>
   * @public
   */
  properties?: Parameter[] | undefined;
}

/**
 * <p>The request body to provide for the API request, as the agent elicited from the user.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html#API_agent-runtime_InvokeAgent_ResponseSyntax">InvokeAgent response</a>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export interface ApiRequestBody {
  /**
   * <p>The content of the request body. The key of the object in this field is a media type defining the format of the request body.</p>
   * @public
   */
  content?: Record<string, PropertyParameters> | undefined;
}

/**
 * <p>Contains information about the API operation that the agent predicts should be called.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>In the <code>returnControl</code> field of the <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html#API_agent-runtime_InvokeAgent_ResponseSyntax">InvokeAgent response</a>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export interface ApiInvocationInput {
  /**
   * <p>The action group that the API operation belongs to.</p>
   * @public
   */
  actionGroup: string | undefined;

  /**
   * <p>The HTTP method of the API operation.</p>
   * @public
   */
  httpMethod?: string | undefined;

  /**
   * <p>The path to the API operation.</p>
   * @public
   */
  apiPath?: string | undefined;

  /**
   * <p>The parameters to provide for the API request, as the agent elicited from the user.</p>
   * @public
   */
  parameters?: ApiParameter[] | undefined;

  /**
   * <p>The request body to provide for the API request, as the agent elicited from the user.</p>
   * @public
   */
  requestBody?: ApiRequestBody | undefined;

  /**
   * <p>Contains information about the API operation to invoke.</p>
   * @public
   */
  actionInvocationType?: ActionInvocationType | undefined;
}

/**
 * <p>Contains information about a parameter of the function.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>In the <code>returnControl</code> field of the <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html#API_agent-runtime_InvokeAgent_ResponseSyntax">InvokeAgent response</a>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export interface FunctionParameter {
  /**
   * <p>The name of the parameter.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The data type of the parameter.</p>
   * @public
   */
  type?: string | undefined;

  /**
   * <p>The value of the parameter.</p>
   * @public
   */
  value?: string | undefined;
}

/**
 * <p>Contains information about the function that the agent predicts should be called.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>In the <code>returnControl</code> field of the <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html#API_agent-runtime_InvokeAgent_ResponseSyntax">InvokeAgent response</a>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export interface FunctionInvocationInput {
  /**
   * <p>The action group that the function belongs to.</p>
   * @public
   */
  actionGroup: string | undefined;

  /**
   * <p>A list of parameters of the function.</p>
   * @public
   */
  parameters?: FunctionParameter[] | undefined;

  /**
   * <p>The name of the function.</p>
   * @public
   */
  function?: string | undefined;

  /**
   * <p>Contains information about the function to invoke,</p>
   * @public
   */
  actionInvocationType?: ActionInvocationType | undefined;
}

/**
 * <p>Contains details about the API operation or function that the agent predicts should be called. </p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>In the <code>returnControl</code> field of the <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html#API_agent-runtime_InvokeAgent_ResponseSyntax">InvokeAgent response</a>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export type InvocationInputMember =
  | InvocationInputMember.ApiInvocationInputMember
  | InvocationInputMember.FunctionInvocationInputMember
  | InvocationInputMember.$UnknownMember;

/**
 * @public
 */
export namespace InvocationInputMember {
  /**
   * <p>Contains information about the API operation that the agent predicts should be called.</p>
   * @public
   */
  export interface ApiInvocationInputMember {
    apiInvocationInput: ApiInvocationInput;
    functionInvocationInput?: never;
    $unknown?: never;
  }

  /**
   * <p>Contains information about the function that the agent predicts should be called.</p>
   * @public
   */
  export interface FunctionInvocationInputMember {
    apiInvocationInput?: never;
    functionInvocationInput: FunctionInvocationInput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    apiInvocationInput?: never;
    functionInvocationInput?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    apiInvocationInput: (value: ApiInvocationInput) => T;
    functionInvocationInput: (value: FunctionInvocationInput) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: InvocationInputMember, visitor: Visitor<T>): T => {
    if (value.apiInvocationInput !== undefined) return visitor.apiInvocationInput(value.apiInvocationInput);
    if (value.functionInvocationInput !== undefined)
      return visitor.functionInvocationInput(value.functionInvocationInput);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Contains information to return from the action group that the agent has predicted to invoke.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html#API_agent-runtime_InvokeAgent_ResponseSyntax">InvokeAgent response</a>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export interface ReturnControlPayload {
  /**
   * <p>A list of objects that contain information about the parameters and inputs that need to be sent into the API operation or function, based on what the agent determines from its session with the user.</p>
   * @public
   */
  invocationInputs?: InvocationInputMember[] | undefined;

  /**
   * <p>The identifier of the action group invocation.</p>
   * @public
   */
  invocationId?: string | undefined;
}

/**
 * <p>Contains information about the failure of the interaction.</p>
 * @public
 */
export interface FailureTrace {
  /**
   * <p>The unique identifier of the trace.</p>
   * @public
   */
  traceId?: string | undefined;

  /**
   * <p>The reason the interaction failed.</p>
   * @public
   */
  failureReason?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const GuardrailAction = {
  INTERVENED: "INTERVENED",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type GuardrailAction = (typeof GuardrailAction)[keyof typeof GuardrailAction];

/**
 * @public
 * @enum
 */
export const GuardrailContentPolicyAction = {
  BLOCKED: "BLOCKED",
} as const;

/**
 * @public
 */
export type GuardrailContentPolicyAction =
  (typeof GuardrailContentPolicyAction)[keyof typeof GuardrailContentPolicyAction];

/**
 * @public
 * @enum
 */
export const GuardrailContentFilterConfidence = {
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type GuardrailContentFilterConfidence =
  (typeof GuardrailContentFilterConfidence)[keyof typeof GuardrailContentFilterConfidence];

/**
 * @public
 * @enum
 */
export const GuardrailContentFilterType = {
  HATE: "HATE",
  INSULTS: "INSULTS",
  MISCONDUCT: "MISCONDUCT",
  PROMPT_ATTACK: "PROMPT_ATTACK",
  SEXUAL: "SEXUAL",
  VIOLENCE: "VIOLENCE",
} as const;

/**
 * @public
 */
export type GuardrailContentFilterType = (typeof GuardrailContentFilterType)[keyof typeof GuardrailContentFilterType];

/**
 * <p>Details of the content filter used in the Guardrail.</p>
 * @public
 */
export interface GuardrailContentFilter {
  /**
   * <p>The type of content detected in the filter by the Guardrail.</p>
   * @public
   */
  type?: GuardrailContentFilterType | undefined;

  /**
   * <p>The confidence level regarding the content detected in the filter by the Guardrail.</p>
   * @public
   */
  confidence?: GuardrailContentFilterConfidence | undefined;

  /**
   * <p>The action placed on the content by the Guardrail filter.</p>
   * @public
   */
  action?: GuardrailContentPolicyAction | undefined;
}

/**
 * <p>The details of the policy assessment in the Guardrails filter.</p>
 * @public
 */
export interface GuardrailContentPolicyAssessment {
  /**
   * <p>The filter details of the policy assessment used in the Guardrails filter.</p>
   * @public
   */
  filters?: GuardrailContentFilter[] | undefined;
}

/**
 * @public
 * @enum
 */
export const GuardrailSensitiveInformationPolicyAction = {
  ANONYMIZED: "ANONYMIZED",
  BLOCKED: "BLOCKED",
} as const;

/**
 * @public
 */
export type GuardrailSensitiveInformationPolicyAction =
  (typeof GuardrailSensitiveInformationPolicyAction)[keyof typeof GuardrailSensitiveInformationPolicyAction];

/**
 * @public
 * @enum
 */
export const GuardrailPiiEntityType = {
  ADDRESS: "ADDRESS",
  AGE: "AGE",
  AWS_ACCESS_KEY: "AWS_ACCESS_KEY",
  AWS_SECRET_KEY: "AWS_SECRET_KEY",
  CA_HEALTH_NUMBER: "CA_HEALTH_NUMBER",
  CA_SOCIAL_INSURANCE_NUMBER: "CA_SOCIAL_INSURANCE_NUMBER",
  CREDIT_DEBIT_CARD_CVV: "CREDIT_DEBIT_CARD_CVV",
  CREDIT_DEBIT_CARD_EXPIRY: "CREDIT_DEBIT_CARD_EXPIRY",
  CREDIT_DEBIT_CARD_NUMBER: "CREDIT_DEBIT_CARD_NUMBER",
  DRIVER_ID: "DRIVER_ID",
  EMAIL: "EMAIL",
  INTERNATIONAL_BANK_ACCOUNT_NUMBER: "INTERNATIONAL_BANK_ACCOUNT_NUMBER",
  IP_ADDRESS: "IP_ADDRESS",
  LICENSE_PLATE: "LICENSE_PLATE",
  MAC_ADDRESS: "MAC_ADDRESS",
  NAME: "NAME",
  PASSWORD: "PASSWORD",
  PHONE: "PHONE",
  PIN: "PIN",
  SWIFT_CODE: "SWIFT_CODE",
  UK_NATIONAL_HEALTH_SERVICE_NUMBER: "UK_NATIONAL_HEALTH_SERVICE_NUMBER",
  UK_NATIONAL_INSURANCE_NUMBER: "UK_NATIONAL_INSURANCE_NUMBER",
  UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER: "UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER",
  URL: "URL",
  USERNAME: "USERNAME",
  US_BANK_ACCOUNT_NUMBER: "US_BANK_ACCOUNT_NUMBER",
  US_BANK_ROUTING_NUMBER: "US_BANK_ROUTING_NUMBER",
  US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER: "US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER",
  US_PASSPORT_NUMBER: "US_PASSPORT_NUMBER",
  US_SOCIAL_SECURITY_NUMBER: "US_SOCIAL_SECURITY_NUMBER",
  VEHICLE_IDENTIFICATION_NUMBER: "VEHICLE_IDENTIFICATION_NUMBER",
} as const;

/**
 * @public
 */
export type GuardrailPiiEntityType = (typeof GuardrailPiiEntityType)[keyof typeof GuardrailPiiEntityType];

/**
 * <p>The Guardrail filter to identify and remove personally identifiable information (PII).</p>
 * @public
 */
export interface GuardrailPiiEntityFilter {
  /**
   * <p>The type of PII the Guardrail filter has identified and removed.</p>
   * @public
   */
  type?: GuardrailPiiEntityType | undefined;

  /**
   * <p>The match to settings in the Guardrail filter to identify and remove PII.</p>
   * @public
   */
  match?: string | undefined;

  /**
   * <p>The action of the Guardrail filter to identify and remove PII.</p>
   * @public
   */
  action?: GuardrailSensitiveInformationPolicyAction | undefined;
}

/**
 * <p>The details for the regex filter used in the Guardrail.</p>
 * @public
 */
export interface GuardrailRegexFilter {
  /**
   * <p>The name details for the regex filter used in the Guardrail.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The regex details for the regex filter used in the Guardrail.</p>
   * @public
   */
  regex?: string | undefined;

  /**
   * <p>The match details for the regex filter used in the Guardrail.</p>
   * @public
   */
  match?: string | undefined;

  /**
   * <p>The action details for the regex filter used in the Guardrail.</p>
   * @public
   */
  action?: GuardrailSensitiveInformationPolicyAction | undefined;
}

/**
 * <p>The details of the sensitive policy assessment used in the Guardrail.</p>
 * @public
 */
export interface GuardrailSensitiveInformationPolicyAssessment {
  /**
   * <p>The details of the PII entities used in the sensitive policy assessment for the Guardrail.</p>
   * @public
   */
  piiEntities?: GuardrailPiiEntityFilter[] | undefined;

  /**
   * <p>The details of the regexes used in the sensitive policy assessment for the Guardrail.</p>
   * @public
   */
  regexes?: GuardrailRegexFilter[] | undefined;
}

/**
 * @public
 * @enum
 */
export const GuardrailTopicPolicyAction = {
  BLOCKED: "BLOCKED",
} as const;

/**
 * @public
 */
export type GuardrailTopicPolicyAction = (typeof GuardrailTopicPolicyAction)[keyof typeof GuardrailTopicPolicyAction];

/**
 * @public
 * @enum
 */
export const GuardrailTopicType = {
  DENY: "DENY",
} as const;

/**
 * @public
 */
export type GuardrailTopicType = (typeof GuardrailTopicType)[keyof typeof GuardrailTopicType];

/**
 * <p>The details for a specific topic defined in the Guardrail.</p>
 * @public
 */
export interface GuardrailTopic {
  /**
   * <p>The name details on a specific topic in the Guardrail.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The type details on a specific topic in the Guardrail.</p>
   * @public
   */
  type?: GuardrailTopicType | undefined;

  /**
   * <p>The action details on a specific topic in the Guardrail.</p>
   * @public
   */
  action?: GuardrailTopicPolicyAction | undefined;
}

/**
 * <p>The details of the policy assessment used in the Guardrail.</p>
 * @public
 */
export interface GuardrailTopicPolicyAssessment {
  /**
   * <p>The topic details of the policy assessment used in the Guardrail.</p>
   * @public
   */
  topics?: GuardrailTopic[] | undefined;
}

/**
 * @public
 * @enum
 */
export const GuardrailWordPolicyAction = {
  BLOCKED: "BLOCKED",
} as const;

/**
 * @public
 */
export type GuardrailWordPolicyAction = (typeof GuardrailWordPolicyAction)[keyof typeof GuardrailWordPolicyAction];

/**
 * <p>The custom word details for the filter in the Guardrail.</p>
 * @public
 */
export interface GuardrailCustomWord {
  /**
   * <p>The match details for the custom word filter in the Guardrail.</p>
   * @public
   */
  match?: string | undefined;

  /**
   * <p>The action details for the custom word filter in the Guardrail.</p>
   * @public
   */
  action?: GuardrailWordPolicyAction | undefined;
}

/**
 * @public
 * @enum
 */
export const GuardrailManagedWordType = {
  PROFANITY: "PROFANITY",
} as const;

/**
 * @public
 */
export type GuardrailManagedWordType = (typeof GuardrailManagedWordType)[keyof typeof GuardrailManagedWordType];

/**
 * <p>The managed word details for the filter in the Guardrail.</p>
 * @public
 */
export interface GuardrailManagedWord {
  /**
   * <p>The match details for the managed word filter in the Guardrail.</p>
   * @public
   */
  match?: string | undefined;

  /**
   * <p>The type details for the managed word filter in the Guardrail.</p>
   * @public
   */
  type?: GuardrailManagedWordType | undefined;

  /**
   * <p>The action details for the managed word filter in the Guardrail.</p>
   * @public
   */
  action?: GuardrailWordPolicyAction | undefined;
}

/**
 * <p>The assessment details for words defined in the Guardrail filter.</p>
 * @public
 */
export interface GuardrailWordPolicyAssessment {
  /**
   * <p>The custom word details for words defined in the Guardrail filter.</p>
   * @public
   */
  customWords?: GuardrailCustomWord[] | undefined;

  /**
   * <p>The managed word lists for words defined in the Guardrail filter.</p>
   * @public
   */
  managedWordLists?: GuardrailManagedWord[] | undefined;
}

/**
 * <p>Assessment details of the content analyzed by Guardrails.</p>
 * @public
 */
export interface GuardrailAssessment {
  /**
   * <p>Topic policy details of the Guardrail.</p>
   * @public
   */
  topicPolicy?: GuardrailTopicPolicyAssessment | undefined;

  /**
   * <p>Content policy details of the Guardrail.</p>
   * @public
   */
  contentPolicy?: GuardrailContentPolicyAssessment | undefined;

  /**
   * <p>Word policy details of the Guardrail.</p>
   * @public
   */
  wordPolicy?: GuardrailWordPolicyAssessment | undefined;

  /**
   * <p>Sensitive Information policy details of Guardrail.</p>
   * @public
   */
  sensitiveInformationPolicy?: GuardrailSensitiveInformationPolicyAssessment | undefined;
}

/**
 * <p>The trace details used in the Guardrail.</p>
 * @public
 */
export interface GuardrailTrace {
  /**
   * <p>The trace action details used with the Guardrail.</p>
   * @public
   */
  action?: GuardrailAction | undefined;

  /**
   * <p>The details of the trace Id used in the Guardrail Trace.</p>
   * @public
   */
  traceId?: string | undefined;

  /**
   * <p>The details of the input assessments used in the Guardrail Trace.</p>
   * @public
   */
  inputAssessments?: GuardrailAssessment[] | undefined;

  /**
   * <p>The details of the output assessments used in the Guardrail Trace.</p>
   * @public
   */
  outputAssessments?: GuardrailAssessment[] | undefined;
}

/**
 * <p>Contains information about the code interpreter being invoked.</p>
 * @public
 */
export interface CodeInterpreterInvocationInput {
  /**
   * <p>The code for the code interpreter to use.</p>
   * @public
   */
  code?: string | undefined;

  /**
   * <p>Files that are uploaded for code interpreter to use.</p>
   * @public
   */
  files?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const InvocationType = {
  ACTION_GROUP: "ACTION_GROUP",
  ACTION_GROUP_CODE_INTERPRETER: "ACTION_GROUP_CODE_INTERPRETER",
  FINISH: "FINISH",
  KNOWLEDGE_BASE: "KNOWLEDGE_BASE",
} as const;

/**
 * @public
 */
export type InvocationType = (typeof InvocationType)[keyof typeof InvocationType];

/**
 * <p>Contains details about the knowledge base to look up and the query to be made.</p>
 * @public
 */
export interface KnowledgeBaseLookupInput {
  /**
   * <p>The query made to the knowledge base.</p>
   * @public
   */
  text?: string | undefined;

  /**
   * <p>The unique identifier of the knowledge base to look up.</p>
   * @public
   */
  knowledgeBaseId?: string | undefined;
}

/**
 * <p>Contains information pertaining to the action group or knowledge base that is being invoked.</p>
 * @public
 */
export interface InvocationInput {
  /**
   * <p>The unique identifier of the trace.</p>
   * @public
   */
  traceId?: string | undefined;

  /**
   * <p>Specifies whether the agent is invoking an action group or a knowledge base.</p>
   * @public
   */
  invocationType?: InvocationType | undefined;

  /**
   * <p>Contains information about the action group to be invoked.</p>
   * @public
   */
  actionGroupInvocationInput?: ActionGroupInvocationInput | undefined;

  /**
   * <p>Contains details about the knowledge base to look up and the query to be made.</p>
   * @public
   */
  knowledgeBaseLookupInput?: KnowledgeBaseLookupInput | undefined;

  /**
   * <p>Contains information about the code interpreter to be invoked.</p>
   * @public
   */
  codeInterpreterInvocationInput?: CodeInterpreterInvocationInput | undefined;
}

/**
 * <p>Specifications about the inference parameters that were provided alongside the prompt. These are specified in the <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PromptOverrideConfiguration.html">PromptOverrideConfiguration</a> object that was set when the agent was created or updated. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html">Inference parameters for foundation models</a>.</p>
 * @public
 */
export interface InferenceConfiguration {
  /**
   * <p>The likelihood of the model selecting higher-probability options while generating a response. A lower value makes the model more likely to choose higher-probability options, while a higher value makes the model more likely to choose lower-probability options.</p>
   * @public
   */
  temperature?: number | undefined;

  /**
   * <p>While generating a response, the model determines the probability of the following token at each point of generation. The value that you set for <code>Top P</code> determines the number of most-likely candidates from which the model chooses the next token in the sequence. For example, if you set <code>topP</code> to 0.8, the model only selects the next token from the top 80% of the probability distribution of next tokens.</p>
   * @public
   */
  topP?: number | undefined;

  /**
   * <p>While generating a response, the model determines the probability of the following token at each point of generation. The value that you set for <code>topK</code> is the number of most-likely candidates from which the model chooses the next token in the sequence. For example, if you set <code>topK</code> to 50, the model selects the next token from among the top 50 most likely choices.</p>
   * @public
   */
  topK?: number | undefined;

  /**
   * <p>The maximum number of tokens allowed in the generated response.</p>
   * @public
   */
  maximumLength?: number | undefined;

  /**
   * <p>A list of stop sequences. A stop sequence is a sequence of characters that causes the model to stop generating the response.</p>
   * @public
   */
  stopSequences?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const CreationMode = {
  DEFAULT: "DEFAULT",
  OVERRIDDEN: "OVERRIDDEN",
} as const;

/**
 * @public
 */
export type CreationMode = (typeof CreationMode)[keyof typeof CreationMode];

/**
 * @public
 * @enum
 */
export const PromptType = {
  KNOWLEDGE_BASE_RESPONSE_GENERATION: "KNOWLEDGE_BASE_RESPONSE_GENERATION",
  ORCHESTRATION: "ORCHESTRATION",
  POST_PROCESSING: "POST_PROCESSING",
  PRE_PROCESSING: "PRE_PROCESSING",
} as const;

/**
 * @public
 */
export type PromptType = (typeof PromptType)[keyof typeof PromptType];

/**
 * <p>The input for the pre-processing step.</p>
 *          <ul>
 *             <li>
 *                <p>The <code>type</code> matches the agent step.</p>
 *             </li>
 *             <li>
 *                <p>The <code>text</code> contains the prompt.</p>
 *             </li>
 *             <li>
 *                <p>The <code>inferenceConfiguration</code>, <code>parserMode</code>, and <code>overrideLambda</code> values are set in the <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PromptOverrideConfiguration.html">PromptOverrideConfiguration</a> object that was set when the agent was created or updated.</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface ModelInvocationInput {
  /**
   * <p>The unique identifier of the trace.</p>
   * @public
   */
  traceId?: string | undefined;

  /**
   * <p>The text that prompted the agent at this step.</p>
   * @public
   */
  text?: string | undefined;

  /**
   * <p>The step in the agent sequence.</p>
   * @public
   */
  type?: PromptType | undefined;

  /**
   * <p>The ARN of the Lambda function to use when parsing the raw foundation model output in parts of the agent sequence.</p>
   * @public
   */
  overrideLambda?: string | undefined;

  /**
   * <p>Specifies whether the default prompt template was <code>OVERRIDDEN</code>. If it was, the <code>basePromptTemplate</code> that was set in the <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PromptOverrideConfiguration.html">PromptOverrideConfiguration</a> object when the agent was created or updated is used instead.</p>
   * @public
   */
  promptCreationMode?: CreationMode | undefined;

  /**
   * <p>Specifications about the inference parameters that were provided alongside the prompt. These are specified in the <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PromptOverrideConfiguration.html">PromptOverrideConfiguration</a> object that was set when the agent was created or updated. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html">Inference parameters for foundation models</a>.</p>
   * @public
   */
  inferenceConfiguration?: InferenceConfiguration | undefined;

  /**
   * <p>Specifies whether to override the default parser Lambda function when parsing the raw foundation model output in the part of the agent sequence defined by the <code>promptType</code>.</p>
   * @public
   */
  parserMode?: CreationMode | undefined;
}

/**
 * <p>Contains information of the usage of the foundation model.</p>
 * @public
 */
export interface Usage {
  /**
   * <p>Contains information about the input tokens from the foundation model usage.</p>
   * @public
   */
  inputTokens?: number | undefined;

  /**
   * <p>Contains information about the output tokens from the foundation model usage.</p>
   * @public
   */
  outputTokens?: number | undefined;
}

/**
 * <p>Provides details of the foundation model.</p>
 * @public
 */
export interface Metadata {
  /**
   * <p>Contains details of the foundation model usage.</p>
   * @public
   */
  usage?: Usage | undefined;
}

/**
 * <p>Contains the raw output from the foundation model.</p>
 * @public
 */
export interface RawResponse {
  /**
   * <p>The foundation model's raw output content.</p>
   * @public
   */
  content?: string | undefined;
}

/**
 * <p>The foundation model output from the orchestration step.</p>
 * @public
 */
export interface OrchestrationModelInvocationOutput {
  /**
   * <p>The unique identifier of the trace.</p>
   * @public
   */
  traceId?: string | undefined;

  /**
   * <p>Contains details of the raw response from the foundation model output.</p>
   * @public
   */
  rawResponse?: RawResponse | undefined;

  /**
   * <p>Contains information about the foundation model output from the orchestration step.</p>
   * @public
   */
  metadata?: Metadata | undefined;
}

/**
 * <p>Contains the JSON-formatted string returned by the API invoked by the code interpreter.</p>
 * @public
 */
export interface CodeInterpreterInvocationOutput {
  /**
   * <p>Contains the successful output returned from code execution</p>
   * @public
   */
  executionOutput?: string | undefined;

  /**
   * <p>Contains the error returned from code execution.</p>
   * @public
   */
  executionError?: string | undefined;

  /**
   * <p>Contains output files, if generated by code execution.</p>
   * @public
   */
  files?: string[] | undefined;

  /**
   * <p>Indicates if the execution of the code timed out.</p>
   * @public
   */
  executionTimeout?: boolean | undefined;
}

/**
 * <p>Contains details about the response to the user.</p>
 * @public
 */
export interface FinalResponse {
  /**
   * <p>The text in the response to the user.</p>
   * @public
   */
  text?: string | undefined;
}

/**
 * <p>Contains details about the results from looking up the knowledge base.</p>
 * @public
 */
export interface KnowledgeBaseLookupOutput {
  /**
   * <p>Contains metadata about the sources cited for the generated response.</p>
   * @public
   */
  retrievedReferences?: RetrievedReference[] | undefined;
}

/**
 * @public
 * @enum
 */
export const Source = {
  ACTION_GROUP: "ACTION_GROUP",
  KNOWLEDGE_BASE: "KNOWLEDGE_BASE",
  PARSER: "PARSER",
} as const;

/**
 * @public
 */
export type Source = (typeof Source)[keyof typeof Source];

/**
 * <p>Contains details about the agent's response to reprompt the input.</p>
 * @public
 */
export interface RepromptResponse {
  /**
   * <p>The text reprompting the input.</p>
   * @public
   */
  text?: string | undefined;

  /**
   * <p>Specifies what output is prompting the agent to reprompt the input.</p>
   * @public
   */
  source?: Source | undefined;
}

/**
 * @public
 * @enum
 */
export const Type = {
  ACTION_GROUP: "ACTION_GROUP",
  ASK_USER: "ASK_USER",
  FINISH: "FINISH",
  KNOWLEDGE_BASE: "KNOWLEDGE_BASE",
  REPROMPT: "REPROMPT",
} as const;

/**
 * @public
 */
export type Type = (typeof Type)[keyof typeof Type];

/**
 * <p>Contains the result or output of an action group or knowledge base, or the response to the user.</p>
 * @public
 */
export interface Observation {
  /**
   * <p>The unique identifier of the trace.</p>
   * @public
   */
  traceId?: string | undefined;

  /**
   * <p>Specifies what kind of information the agent returns in the observation. The following values are possible.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTION_GROUP</code> – The agent returns the result of an action group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KNOWLEDGE_BASE</code> – The agent returns information from a knowledge base.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FINISH</code> – The agent returns a final response to the user with no follow-up.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ASK_USER</code> – The agent asks the user a question.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REPROMPT</code> – The agent prompts the user again for the same information.</p>
   *             </li>
   *          </ul>
   * @public
   */
  type?: Type | undefined;

  /**
   * <p>Contains the JSON-formatted string returned by the API invoked by the action group.</p>
   * @public
   */
  actionGroupInvocationOutput?: ActionGroupInvocationOutput | undefined;

  /**
   * <p>Contains details about the results from looking up the knowledge base.</p>
   * @public
   */
  knowledgeBaseLookupOutput?: KnowledgeBaseLookupOutput | undefined;

  /**
   * <p>Contains details about the response to the user.</p>
   * @public
   */
  finalResponse?: FinalResponse | undefined;

  /**
   * <p>Contains details about the response to reprompt the input.</p>
   * @public
   */
  repromptResponse?: RepromptResponse | undefined;

  /**
   * <p>Contains the JSON-formatted string returned by the API invoked by the code interpreter.</p>
   * @public
   */
  codeInterpreterInvocationOutput?: CodeInterpreterInvocationOutput | undefined;
}

/**
 * <p>Contains the reasoning, based on the input, that the agent uses to justify carrying out an action group or getting information from a knowledge base.</p>
 * @public
 */
export interface Rationale {
  /**
   * <p>The unique identifier of the trace step.</p>
   * @public
   */
  traceId?: string | undefined;

  /**
   * <p>The reasoning or thought process of the agent, based on the input.</p>
   * @public
   */
  text?: string | undefined;
}

/**
 * <p>Details about the orchestration step, in which the agent determines the order in which actions are executed and which knowledge bases are retrieved.</p>
 * @public
 */
export type OrchestrationTrace =
  | OrchestrationTrace.InvocationInputMember
  | OrchestrationTrace.ModelInvocationInputMember
  | OrchestrationTrace.ModelInvocationOutputMember
  | OrchestrationTrace.ObservationMember
  | OrchestrationTrace.RationaleMember
  | OrchestrationTrace.$UnknownMember;

/**
 * @public
 */
export namespace OrchestrationTrace {
  /**
   * <p>Details about the reasoning, based on the input, that the agent uses to justify carrying out an action group or getting information from a knowledge base.</p>
   * @public
   */
  export interface RationaleMember {
    rationale: Rationale;
    invocationInput?: never;
    observation?: never;
    modelInvocationInput?: never;
    modelInvocationOutput?: never;
    $unknown?: never;
  }

  /**
   * <p>Contains information pertaining to the action group or knowledge base that is being invoked.</p>
   * @public
   */
  export interface InvocationInputMember {
    rationale?: never;
    invocationInput: InvocationInput;
    observation?: never;
    modelInvocationInput?: never;
    modelInvocationOutput?: never;
    $unknown?: never;
  }

  /**
   * <p>Details about the observation (the output of the action group Lambda or knowledge base) made by the agent.</p>
   * @public
   */
  export interface ObservationMember {
    rationale?: never;
    invocationInput?: never;
    observation: Observation;
    modelInvocationInput?: never;
    modelInvocationOutput?: never;
    $unknown?: never;
  }

  /**
   * <p>The input for the orchestration step.</p>
   *          <ul>
   *             <li>
   *                <p>The <code>type</code> is <code>ORCHESTRATION</code>.</p>
   *             </li>
   *             <li>
   *                <p>The <code>text</code> contains the prompt.</p>
   *             </li>
   *             <li>
   *                <p>The <code>inferenceConfiguration</code>, <code>parserMode</code>, and <code>overrideLambda</code> values are set in the <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PromptOverrideConfiguration.html">PromptOverrideConfiguration</a> object that was set when the agent was created or updated.</p>
   *             </li>
   *          </ul>
   * @public
   */
  export interface ModelInvocationInputMember {
    rationale?: never;
    invocationInput?: never;
    observation?: never;
    modelInvocationInput: ModelInvocationInput;
    modelInvocationOutput?: never;
    $unknown?: never;
  }

  /**
   * <p>Contains information pertaining to the output from the foundation model that is being invoked.</p>
   * @public
   */
  export interface ModelInvocationOutputMember {
    rationale?: never;
    invocationInput?: never;
    observation?: never;
    modelInvocationInput?: never;
    modelInvocationOutput: OrchestrationModelInvocationOutput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    rationale?: never;
    invocationInput?: never;
    observation?: never;
    modelInvocationInput?: never;
    modelInvocationOutput?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    rationale: (value: Rationale) => T;
    invocationInput: (value: InvocationInput) => T;
    observation: (value: Observation) => T;
    modelInvocationInput: (value: ModelInvocationInput) => T;
    modelInvocationOutput: (value: OrchestrationModelInvocationOutput) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: OrchestrationTrace, visitor: Visitor<T>): T => {
    if (value.rationale !== undefined) return visitor.rationale(value.rationale);
    if (value.invocationInput !== undefined) return visitor.invocationInput(value.invocationInput);
    if (value.observation !== undefined) return visitor.observation(value.observation);
    if (value.modelInvocationInput !== undefined) return visitor.modelInvocationInput(value.modelInvocationInput);
    if (value.modelInvocationOutput !== undefined) return visitor.modelInvocationOutput(value.modelInvocationOutput);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Details about the response from the Lambda parsing of the output from the post-processing step.</p>
 * @public
 */
export interface PostProcessingParsedResponse {
  /**
   * <p>The text returned by the parser.</p>
   * @public
   */
  text?: string | undefined;
}

/**
 * <p>The foundation model output from the post-processing step.</p>
 * @public
 */
export interface PostProcessingModelInvocationOutput {
  /**
   * <p>The unique identifier of the trace.</p>
   * @public
   */
  traceId?: string | undefined;

  /**
   * <p>Details about the response from the Lambda parsing of the output of the post-processing step.</p>
   * @public
   */
  parsedResponse?: PostProcessingParsedResponse | undefined;

  /**
   * <p>
   *             Details of the raw response from the foundation model output.
   *         </p>
   * @public
   */
  rawResponse?: RawResponse | undefined;

  /**
   * <p>
   *             Contains information about the foundation model output from the post-processing step.
   *         </p>
   * @public
   */
  metadata?: Metadata | undefined;
}

/**
 * <p>Details about the post-processing step, in which the agent shapes the response.</p>
 * @public
 */
export type PostProcessingTrace =
  | PostProcessingTrace.ModelInvocationInputMember
  | PostProcessingTrace.ModelInvocationOutputMember
  | PostProcessingTrace.$UnknownMember;

/**
 * @public
 */
export namespace PostProcessingTrace {
  /**
   * <p>The input for the post-processing step.</p>
   *          <ul>
   *             <li>
   *                <p>The <code>type</code> is <code>POST_PROCESSING</code>.</p>
   *             </li>
   *             <li>
   *                <p>The <code>text</code> contains the prompt.</p>
   *             </li>
   *             <li>
   *                <p>The <code>inferenceConfiguration</code>, <code>parserMode</code>, and <code>overrideLambda</code> values are set in the <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PromptOverrideConfiguration.html">PromptOverrideConfiguration</a> object that was set when the agent was created or updated.</p>
   *             </li>
   *          </ul>
   * @public
   */
  export interface ModelInvocationInputMember {
    modelInvocationInput: ModelInvocationInput;
    modelInvocationOutput?: never;
    $unknown?: never;
  }

  /**
   * <p>The foundation model output from the post-processing step.</p>
   * @public
   */
  export interface ModelInvocationOutputMember {
    modelInvocationInput?: never;
    modelInvocationOutput: PostProcessingModelInvocationOutput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    modelInvocationInput?: never;
    modelInvocationOutput?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    modelInvocationInput: (value: ModelInvocationInput) => T;
    modelInvocationOutput: (value: PostProcessingModelInvocationOutput) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: PostProcessingTrace, visitor: Visitor<T>): T => {
    if (value.modelInvocationInput !== undefined) return visitor.modelInvocationInput(value.modelInvocationInput);
    if (value.modelInvocationOutput !== undefined) return visitor.modelInvocationOutput(value.modelInvocationOutput);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Details about the response from the Lambda parsing of the output from the pre-processing step.</p>
 * @public
 */
export interface PreProcessingParsedResponse {
  /**
   * <p>The text returned by the parsing of the pre-processing step, explaining the steps that the agent plans to take in orchestration, if the user input is valid.</p>
   * @public
   */
  rationale?: string | undefined;

  /**
   * <p>Whether the user input is valid or not. If <code>false</code>, the agent doesn't proceed to orchestration.</p>
   * @public
   */
  isValid?: boolean | undefined;
}

/**
 * <p>The foundation model output from the pre-processing step.</p>
 * @public
 */
export interface PreProcessingModelInvocationOutput {
  /**
   * <p>The unique identifier of the trace.</p>
   * @public
   */
  traceId?: string | undefined;

  /**
   * <p>Details about the response from the Lambda parsing of the output of the pre-processing step.</p>
   * @public
   */
  parsedResponse?: PreProcessingParsedResponse | undefined;

  /**
   * <p>
   *             Details of the raw response from the foundation model output.
   *         </p>
   * @public
   */
  rawResponse?: RawResponse | undefined;

  /**
   * <p>
   *             Contains information about the foundation model output from the pre-processing step.
   *         </p>
   * @public
   */
  metadata?: Metadata | undefined;
}

/**
 * <p>Details about the pre-processing step, in which the agent contextualizes and categorizes user inputs.</p>
 * @public
 */
export type PreProcessingTrace =
  | PreProcessingTrace.ModelInvocationInputMember
  | PreProcessingTrace.ModelInvocationOutputMember
  | PreProcessingTrace.$UnknownMember;

/**
 * @public
 */
export namespace PreProcessingTrace {
  /**
   * <p>The input for the pre-processing step.</p>
   *          <ul>
   *             <li>
   *                <p>The <code>type</code> is <code>PRE_PROCESSING</code>.</p>
   *             </li>
   *             <li>
   *                <p>The <code>text</code> contains the prompt.</p>
   *             </li>
   *             <li>
   *                <p>The <code>inferenceConfiguration</code>, <code>parserMode</code>, and <code>overrideLambda</code> values are set in the <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PromptOverrideConfiguration.html">PromptOverrideConfiguration</a> object that was set when the agent was created or updated.</p>
   *             </li>
   *          </ul>
   * @public
   */
  export interface ModelInvocationInputMember {
    modelInvocationInput: ModelInvocationInput;
    modelInvocationOutput?: never;
    $unknown?: never;
  }

  /**
   * <p>The foundation model output from the pre-processing step.</p>
   * @public
   */
  export interface ModelInvocationOutputMember {
    modelInvocationInput?: never;
    modelInvocationOutput: PreProcessingModelInvocationOutput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    modelInvocationInput?: never;
    modelInvocationOutput?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    modelInvocationInput: (value: ModelInvocationInput) => T;
    modelInvocationOutput: (value: PreProcessingModelInvocationOutput) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: PreProcessingTrace, visitor: Visitor<T>): T => {
    if (value.modelInvocationInput !== undefined) return visitor.modelInvocationInput(value.modelInvocationInput);
    if (value.modelInvocationOutput !== undefined) return visitor.modelInvocationOutput(value.modelInvocationOutput);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Contains one part of the agent's reasoning process and results from calling API actions and querying knowledge bases. You can use the trace to understand how the agent arrived at the response it provided the customer. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-test.html#trace-enablement">Trace enablement</a>.</p>
 * @public
 */
export type Trace =
  | Trace.FailureTraceMember
  | Trace.GuardrailTraceMember
  | Trace.OrchestrationTraceMember
  | Trace.PostProcessingTraceMember
  | Trace.PreProcessingTraceMember
  | Trace.$UnknownMember;

/**
 * @public
 */
export namespace Trace {
  /**
   * <p>The trace details for a trace defined in the Guardrail filter.</p>
   * @public
   */
  export interface GuardrailTraceMember {
    guardrailTrace: GuardrailTrace;
    preProcessingTrace?: never;
    orchestrationTrace?: never;
    postProcessingTrace?: never;
    failureTrace?: never;
    $unknown?: never;
  }

  /**
   * <p>Details about the pre-processing step, in which the agent contextualizes and categorizes user inputs.</p>
   * @public
   */
  export interface PreProcessingTraceMember {
    guardrailTrace?: never;
    preProcessingTrace: PreProcessingTrace;
    orchestrationTrace?: never;
    postProcessingTrace?: never;
    failureTrace?: never;
    $unknown?: never;
  }

  /**
   * <p>Details about the orchestration step, in which the agent determines the order in which actions are executed and which knowledge bases are retrieved.</p>
   * @public
   */
  export interface OrchestrationTraceMember {
    guardrailTrace?: never;
    preProcessingTrace?: never;
    orchestrationTrace: OrchestrationTrace;
    postProcessingTrace?: never;
    failureTrace?: never;
    $unknown?: never;
  }

  /**
   * <p>Details about the post-processing step, in which the agent shapes the response..</p>
   * @public
   */
  export interface PostProcessingTraceMember {
    guardrailTrace?: never;
    preProcessingTrace?: never;
    orchestrationTrace?: never;
    postProcessingTrace: PostProcessingTrace;
    failureTrace?: never;
    $unknown?: never;
  }

  /**
   * <p>Contains information about the failure of the interaction.</p>
   * @public
   */
  export interface FailureTraceMember {
    guardrailTrace?: never;
    preProcessingTrace?: never;
    orchestrationTrace?: never;
    postProcessingTrace?: never;
    failureTrace: FailureTrace;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    guardrailTrace?: never;
    preProcessingTrace?: never;
    orchestrationTrace?: never;
    postProcessingTrace?: never;
    failureTrace?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    guardrailTrace: (value: GuardrailTrace) => T;
    preProcessingTrace: (value: PreProcessingTrace) => T;
    orchestrationTrace: (value: OrchestrationTrace) => T;
    postProcessingTrace: (value: PostProcessingTrace) => T;
    failureTrace: (value: FailureTrace) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: Trace, visitor: Visitor<T>): T => {
    if (value.guardrailTrace !== undefined) return visitor.guardrailTrace(value.guardrailTrace);
    if (value.preProcessingTrace !== undefined) return visitor.preProcessingTrace(value.preProcessingTrace);
    if (value.orchestrationTrace !== undefined) return visitor.orchestrationTrace(value.orchestrationTrace);
    if (value.postProcessingTrace !== undefined) return visitor.postProcessingTrace(value.postProcessingTrace);
    if (value.failureTrace !== undefined) return visitor.failureTrace(value.failureTrace);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Contains information about the agent and session, alongside the agent's reasoning process and results from calling API actions and querying knowledge bases and metadata about the trace. You can use the trace to understand how the agent arrived at the response it provided the customer. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-test.html#trace-enablement">Trace enablement</a>.</p>
 * @public
 */
export interface TracePart {
  /**
   * <p>The unique identifier of the agent.</p>
   * @public
   */
  agentId?: string | undefined;

  /**
   * <p>The unique identifier of the alias of the agent.</p>
   * @public
   */
  agentAliasId?: string | undefined;

  /**
   * <p>The unique identifier of the session with the agent.</p>
   * @public
   */
  sessionId?: string | undefined;

  /**
   * <p>The version of the agent.</p>
   * @public
   */
  agentVersion?: string | undefined;

  /**
   * <p>Contains one part of the agent's reasoning process and results from calling API actions and querying knowledge bases. You can use the trace to understand how the agent arrived at the response it provided the customer. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-test.html#trace-enablement">Trace enablement</a>.</p>
   * @public
   */
  trace?: Trace | undefined;
}

/**
 * <p>The response from invoking the agent and associated citations and trace information.</p>
 * @public
 */
export type ResponseStream =
  | ResponseStream.AccessDeniedExceptionMember
  | ResponseStream.BadGatewayExceptionMember
  | ResponseStream.ChunkMember
  | ResponseStream.ConflictExceptionMember
  | ResponseStream.DependencyFailedExceptionMember
  | ResponseStream.FilesMember
  | ResponseStream.InternalServerExceptionMember
  | ResponseStream.ResourceNotFoundExceptionMember
  | ResponseStream.ReturnControlMember
  | ResponseStream.ServiceQuotaExceededExceptionMember
  | ResponseStream.ThrottlingExceptionMember
  | ResponseStream.TraceMember
  | ResponseStream.ValidationExceptionMember
  | ResponseStream.$UnknownMember;

/**
 * @public
 */
export namespace ResponseStream {
  /**
   * <p>Contains a part of an agent response and citations for it.</p>
   * @public
   */
  export interface ChunkMember {
    chunk: PayloadPart;
    trace?: never;
    returnControl?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    files?: never;
    $unknown?: never;
  }

  /**
   * <p>Contains information about the agent and session, alongside the agent's reasoning process and results from calling actions and querying knowledge bases and metadata about the trace. You can use the trace to understand how the agent arrived at the response it provided the customer. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/trace-events.html">Trace events</a>.</p>
   * @public
   */
  export interface TraceMember {
    chunk?: never;
    trace: TracePart;
    returnControl?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    files?: never;
    $unknown?: never;
  }

  /**
   * <p>Contains the parameters and information that the agent elicited from the customer to carry out an action. This information is returned to the system and can be used in your own setup for fulfilling the action.</p>
   * @public
   */
  export interface ReturnControlMember {
    chunk?: never;
    trace?: never;
    returnControl: ReturnControlPayload;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    files?: never;
    $unknown?: never;
  }

  /**
   * <p>An internal server error occurred. Retry your request.</p>
   * @public
   */
  export interface InternalServerExceptionMember {
    chunk?: never;
    trace?: never;
    returnControl?: never;
    internalServerException: InternalServerException;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    files?: never;
    $unknown?: never;
  }

  /**
   * <p>Input validation failed. Check your request parameters and retry the request.</p>
   * @public
   */
  export interface ValidationExceptionMember {
    chunk?: never;
    trace?: never;
    returnControl?: never;
    internalServerException?: never;
    validationException: ValidationException;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    files?: never;
    $unknown?: never;
  }

  /**
   * <p>The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.</p>
   * @public
   */
  export interface ResourceNotFoundExceptionMember {
    chunk?: never;
    trace?: never;
    returnControl?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException: ResourceNotFoundException;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    files?: never;
    $unknown?: never;
  }

  /**
   * <p>The number of requests exceeds the service quota. Resubmit your request later.</p>
   * @public
   */
  export interface ServiceQuotaExceededExceptionMember {
    chunk?: never;
    trace?: never;
    returnControl?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException: ServiceQuotaExceededException;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    files?: never;
    $unknown?: never;
  }

  /**
   * <p>The number of requests exceeds the limit. Resubmit your request later.</p>
   * @public
   */
  export interface ThrottlingExceptionMember {
    chunk?: never;
    trace?: never;
    returnControl?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException: ThrottlingException;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    files?: never;
    $unknown?: never;
  }

  /**
   * <p>The request is denied because of missing access permissions. Check your permissions and retry your request.</p>
   * @public
   */
  export interface AccessDeniedExceptionMember {
    chunk?: never;
    trace?: never;
    returnControl?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException: AccessDeniedException;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    files?: never;
    $unknown?: never;
  }

  /**
   * <p>There was a conflict performing an operation. Resolve the conflict and retry your request.</p>
   * @public
   */
  export interface ConflictExceptionMember {
    chunk?: never;
    trace?: never;
    returnControl?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException: ConflictException;
    dependencyFailedException?: never;
    badGatewayException?: never;
    files?: never;
    $unknown?: never;
  }

  /**
   * <p>There was an issue with a dependency. Check the resource configurations and retry the request.</p>
   * @public
   */
  export interface DependencyFailedExceptionMember {
    chunk?: never;
    trace?: never;
    returnControl?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException: DependencyFailedException;
    badGatewayException?: never;
    files?: never;
    $unknown?: never;
  }

  /**
   * <p>There was an issue with a dependency due to a server issue. Retry your request.</p>
   * @public
   */
  export interface BadGatewayExceptionMember {
    chunk?: never;
    trace?: never;
    returnControl?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException: BadGatewayException;
    files?: never;
    $unknown?: never;
  }

  /**
   * <p>Contains intermediate response for code interpreter if any files have been generated.</p>
   * @public
   */
  export interface FilesMember {
    chunk?: never;
    trace?: never;
    returnControl?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    files: FilePart;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    chunk?: never;
    trace?: never;
    returnControl?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    files?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    chunk: (value: PayloadPart) => T;
    trace: (value: TracePart) => T;
    returnControl: (value: ReturnControlPayload) => T;
    internalServerException: (value: InternalServerException) => T;
    validationException: (value: ValidationException) => T;
    resourceNotFoundException: (value: ResourceNotFoundException) => T;
    serviceQuotaExceededException: (value: ServiceQuotaExceededException) => T;
    throttlingException: (value: ThrottlingException) => T;
    accessDeniedException: (value: AccessDeniedException) => T;
    conflictException: (value: ConflictException) => T;
    dependencyFailedException: (value: DependencyFailedException) => T;
    badGatewayException: (value: BadGatewayException) => T;
    files: (value: FilePart) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ResponseStream, visitor: Visitor<T>): T => {
    if (value.chunk !== undefined) return visitor.chunk(value.chunk);
    if (value.trace !== undefined) return visitor.trace(value.trace);
    if (value.returnControl !== undefined) return visitor.returnControl(value.returnControl);
    if (value.internalServerException !== undefined)
      return visitor.internalServerException(value.internalServerException);
    if (value.validationException !== undefined) return visitor.validationException(value.validationException);
    if (value.resourceNotFoundException !== undefined)
      return visitor.resourceNotFoundException(value.resourceNotFoundException);
    if (value.serviceQuotaExceededException !== undefined)
      return visitor.serviceQuotaExceededException(value.serviceQuotaExceededException);
    if (value.throttlingException !== undefined) return visitor.throttlingException(value.throttlingException);
    if (value.accessDeniedException !== undefined) return visitor.accessDeniedException(value.accessDeniedException);
    if (value.conflictException !== undefined) return visitor.conflictException(value.conflictException);
    if (value.dependencyFailedException !== undefined)
      return visitor.dependencyFailedException(value.dependencyFailedException);
    if (value.badGatewayException !== undefined) return visitor.badGatewayException(value.badGatewayException);
    if (value.files !== undefined) return visitor.files(value.files);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface InvokeAgentResponse {
  /**
   * <p>The agent's response to the user prompt.</p>
   * @public
   */
  completion: AsyncIterable<ResponseStream> | undefined;

  /**
   * <p>The MIME type of the input data in the request. The default value is <code>application/json</code>.</p>
   * @public
   */
  contentType: string | undefined;

  /**
   * <p>The unique identifier of the session with the agent.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The unique identifier of the agent memory.</p>
   * @public
   */
  memoryId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAgentMemoryRequest {
  /**
   * <p>The unique identifier of the agent to which the alias belongs.</p>
   * @public
   */
  agentId: string | undefined;

  /**
   * <p>The unique identifier of an alias of an agent.</p>
   * @public
   */
  agentAliasId: string | undefined;

  /**
   * <p>The unique identifier of the memory.</p>
   * @public
   */
  memoryId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAgentMemoryResponse {}

/**
 * @public
 * @enum
 */
export const MemoryType = {
  SESSION_SUMMARY: "SESSION_SUMMARY",
} as const;

/**
 * @public
 */
export type MemoryType = (typeof MemoryType)[keyof typeof MemoryType];

/**
 * @public
 */
export interface GetAgentMemoryRequest {
  /**
   * <p>If the total number of results is greater than the maxItems value provided in the request, enter the token returned
   *       in the <code>nextToken</code> field in the response in this field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return in the response. If the total number of results is greater
   *       than this value, use the token returned in the response in the <code>nextToken</code> field when making another
   *       request to return the next batch of results.</p>
   * @public
   */
  maxItems?: number | undefined;

  /**
   * <p>The unique identifier of the agent to which the alias belongs.</p>
   * @public
   */
  agentId: string | undefined;

  /**
   * <p>The unique identifier of an alias of an agent.</p>
   * @public
   */
  agentAliasId: string | undefined;

  /**
   * <p>The type of memory.</p>
   * @public
   */
  memoryType: MemoryType | undefined;

  /**
   * <p>The unique identifier of the memory. </p>
   * @public
   */
  memoryId: string | undefined;
}

/**
 * <p>Contains details of a session summary.</p>
 * @public
 */
export interface MemorySessionSummary {
  /**
   * <p>The unique identifier of the memory where the session summary is stored.</p>
   * @public
   */
  memoryId?: string | undefined;

  /**
   * <p>The identifier for this session.</p>
   * @public
   */
  sessionId?: string | undefined;

  /**
   * <p>The start time for this session.</p>
   * @public
   */
  sessionStartTime?: Date | undefined;

  /**
   * <p>The time when the memory duration for the session is set to end.</p>
   * @public
   */
  sessionExpiryTime?: Date | undefined;

  /**
   * <p>The summarized text for this session.</p>
   * @public
   */
  summaryText?: string | undefined;
}

/**
 * <p>Contains sessions summaries.</p>
 * @public
 */
export type Memory = Memory.SessionSummaryMember | Memory.$UnknownMember;

/**
 * @public
 */
export namespace Memory {
  /**
   * <p>Contains summary of a session.</p>
   * @public
   */
  export interface SessionSummaryMember {
    sessionSummary: MemorySessionSummary;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    sessionSummary?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    sessionSummary: (value: MemorySessionSummary) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: Memory, visitor: Visitor<T>): T => {
    if (value.sessionSummary !== undefined) return visitor.sessionSummary(value.sessionSummary);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface GetAgentMemoryResponse {
  /**
   * <p>If the total number of results is greater than the maxItems value provided in the request, use this token
   *       when making another request in the <code>nextToken</code> field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Contains details of the sessions stored in the memory</p>
   * @public
   */
  memoryContents?: Memory[] | undefined;
}

/**
 * <p>Contains the query made to the knowledge base.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_RequestSyntax">RetrieveAndGenerate request</a> – in the <code>input</code> field</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface RetrieveAndGenerateInput {
  /**
   * <p>The query made to the knowledge base.</p>
   * @public
   */
  text: string | undefined;
}

/**
 * <p>The configuration details for the guardrail.</p>
 * @public
 */
export interface GuardrailConfiguration {
  /**
   * <p>The unique identifier for the guardrail.</p>
   * @public
   */
  guardrailId: string | undefined;

  /**
   * <p>The version of the guardrail.</p>
   * @public
   */
  guardrailVersion: string | undefined;
}

/**
 * <p>Configuration settings for text generation using a language model via the
 *       RetrieveAndGenerate operation. Includes parameters like temperature, top-p, maximum token
 *       count, and stop sequences. </p>
 *          <note>
 *             <p>The valid range of <code>maxTokens</code> depends on the accepted values for your chosen
 *         model's inference parameters. To see the inference parameters for your model, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html">Inference
 *           parameters for foundation models.</a>
 *             </p>
 *          </note>
 * @public
 */
export interface TextInferenceConfig {
  /**
   * <p> Controls the random-ness of text generated by the language model, influencing how much the model sticks to the most predictable next words versus exploring more surprising options. A lower temperature value (e.g. 0.2 or 0.3) makes model outputs more deterministic or predictable, while a higher temperature (e.g. 0.8 or 0.9) makes the outputs more creative or unpredictable.  </p>
   * @public
   */
  temperature?: number | undefined;

  /**
   * <p> A probability distribution threshold which controls what the model considers for the set of possible next tokens. The model will only consider the top p% of the probability distribution when generating the next token. </p>
   * @public
   */
  topP?: number | undefined;

  /**
   * <p>The maximum number of tokens to generate in the output text. Do not use the minimum of 0
   *       or the maximum of 65536. The limit values described here are arbitary values, for actual
   *       values consult the limits defined by your specific model.</p>
   * @public
   */
  maxTokens?: number | undefined;

  /**
   * <p>A list of sequences of characters that, if generated, will cause the model to stop
   *       generating further tokens. Do not use a minimum length of 1 or a maximum length of 1000. The
   *       limit values described here are arbitary values, for actual values consult the limits defined
   *       by your specific model.</p>
   * @public
   */
  stopSequences?: string[] | undefined;
}

/**
 * <p> The configuration for inference settings when generating responses using RetrieveAndGenerate. </p>
 * @public
 */
export interface InferenceConfig {
  /**
   * <p> Configuration settings specific to text generation while generating responses using RetrieveAndGenerate. </p>
   * @public
   */
  textInferenceConfig?: TextInferenceConfig | undefined;
}

/**
 * <p>Contains the template for the prompt that's sent to the model for response generation. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/kb-test-config.html#kb-test-config-sysprompt">Knowledge base prompt templates</a>.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_RequestSyntax">RetrieveAndGenerate request</a> – in the <code>filter</code> field</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface PromptTemplate {
  /**
   * <p>The template for the prompt that's sent to the model for response generation. You can include prompt placeholders, which become replaced before the prompt is sent to the model to provide instructions and context to the model. In addition, you can include XML tags to delineate meaningful sections of the prompt template.</p>
   *          <p>For more information, see the following resources:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/kb-test-config.html#kb-test-config-sysprompt">Knowledge base prompt templates</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.anthropic.com/claude/docs/use-xml-tags">Use XML tags with Anthropic Claude models</a>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  textPromptTemplate?: string | undefined;
}

/**
 * <p>Contains the generation configuration of the external source wrapper object.</p>
 * @public
 */
export interface ExternalSourcesGenerationConfiguration {
  /**
   * <p>Contain the textPromptTemplate string for the external source wrapper object.</p>
   * @public
   */
  promptTemplate?: PromptTemplate | undefined;

  /**
   * <p>The configuration details for the guardrail.</p>
   * @public
   */
  guardrailConfiguration?: GuardrailConfiguration | undefined;

  /**
   * <p> Configuration settings for inference when using RetrieveAndGenerate to generate responses while using an external source.</p>
   * @public
   */
  inferenceConfig?: InferenceConfig | undefined;

  /**
   * <p> Additional model parameters and their corresponding values not included in the textInferenceConfig structure for an external source. Takes in custom model parameters specific to the language model being used. </p>
   * @public
   */
  additionalModelRequestFields?: Record<string, __DocumentType> | undefined;
}

/**
 * <p>This property contains the document to chat with, along with its attributes.</p>
 * @public
 */
export interface ByteContentDoc {
  /**
   * <p>The file name of the document contained in the wrapper object.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The MIME type of the document contained in the wrapper object.</p>
   * @public
   */
  contentType: string | undefined;

  /**
   * <p>The byte value of the file to upload, encoded as a Base-64 string.</p>
   * @public
   */
  data: Uint8Array | undefined;
}

/**
 * <p>The unique wrapper object of the document from the S3 location.</p>
 * @public
 */
export interface S3ObjectDoc {
  /**
   * <p>The file location of the S3 wrapper object.</p>
   * @public
   */
  uri: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ExternalSourceType = {
  BYTE_CONTENT: "BYTE_CONTENT",
  S3: "S3",
} as const;

/**
 * @public
 */
export type ExternalSourceType = (typeof ExternalSourceType)[keyof typeof ExternalSourceType];

/**
 * <p>The unique external source of the content contained in the wrapper object.</p>
 * @public
 */
export interface ExternalSource {
  /**
   * <p>The source type of the external source wrapper object.</p>
   * @public
   */
  sourceType: ExternalSourceType | undefined;

  /**
   * <p>The S3 location of the external source wrapper object.</p>
   * @public
   */
  s3Location?: S3ObjectDoc | undefined;

  /**
   * <p>The identifier, contentType, and data of the external source wrapper object.</p>
   * @public
   */
  byteContent?: ByteContentDoc | undefined;
}

/**
 * <p>The configurations of the external source wrapper object in the <code>retrieveAndGenerate</code> function.</p>
 * @public
 */
export interface ExternalSourcesRetrieveAndGenerateConfiguration {
  /**
   * <p>The model Amazon Resource Name (ARN) for the external source wrapper object in the <code>retrieveAndGenerate</code> function.</p>
   * @public
   */
  modelArn: string | undefined;

  /**
   * <p>The document for the external source wrapper object in the <code>retrieveAndGenerate</code> function.</p>
   * @public
   */
  sources: ExternalSource[] | undefined;

  /**
   * <p>The prompt used with the external source wrapper object with the <code>retrieveAndGenerate</code> function.</p>
   * @public
   */
  generationConfiguration?: ExternalSourcesGenerationConfiguration | undefined;
}

/**
 * <p>Contains configurations for response generation based on the knowledge base query results.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_RequestSyntax">RetrieveAndGenerate request</a>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export interface GenerationConfiguration {
  /**
   * <p>Contains the template for the prompt that's sent to the model for response generation. Generation prompts must include the <code>$search_results$</code> variable. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-placeholders.html">Use placeholder variables</a> in the user guide.</p>
   * @public
   */
  promptTemplate?: PromptTemplate | undefined;

  /**
   * <p>The configuration details for the guardrail.</p>
   * @public
   */
  guardrailConfiguration?: GuardrailConfiguration | undefined;

  /**
   * <p> Configuration settings for inference when using RetrieveAndGenerate to generate responses while using a knowledge base as a source. </p>
   * @public
   */
  inferenceConfig?: InferenceConfig | undefined;

  /**
   * <p> Additional model parameters and corresponding values not included in the textInferenceConfig structure for a knowledge base. This allows users to provide custom model parameters specific to the language model being used. </p>
   * @public
   */
  additionalModelRequestFields?: Record<string, __DocumentType> | undefined;
}

/**
 * @public
 * @enum
 */
export const QueryTransformationType = {
  QUERY_DECOMPOSITION: "QUERY_DECOMPOSITION",
} as const;

/**
 * @public
 */
export type QueryTransformationType = (typeof QueryTransformationType)[keyof typeof QueryTransformationType];

/**
 * <p>To split up the prompt and retrieve multiple sources, set the transformation type to
 *     <code>QUERY_DECOMPOSITION</code>.</p>
 * @public
 */
export interface QueryTransformationConfiguration {
  /**
   * <p>The type of transformation to apply to the prompt.</p>
   * @public
   */
  type: QueryTransformationType | undefined;
}

/**
 * <p>Settings for how the model processes the prompt prior to retrieval and generation.</p>
 * @public
 */
export interface OrchestrationConfiguration {
  /**
   * <p>Contains the template for the prompt that's sent to the model. Orchestration prompts must include the <code>$conversation_history$</code> and <code>$output_format_instructions$</code> variables. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-placeholders.html">Use placeholder variables</a> in the user guide.</p>
   * @public
   */
  promptTemplate?: PromptTemplate | undefined;

  /**
   * <p> Configuration settings for inference when using RetrieveAndGenerate to generate responses while using a knowledge base as a source. </p>
   * @public
   */
  inferenceConfig?: InferenceConfig | undefined;

  /**
   * <p> Additional model parameters and corresponding values not included in the textInferenceConfig structure for a knowledge base. This allows users to provide custom model parameters specific to the language model being used. </p>
   * @public
   */
  additionalModelRequestFields?: Record<string, __DocumentType> | undefined;

  /**
   * <p>To split up the prompt and retrieve multiple sources, set the transformation type to
   *     <code>QUERY_DECOMPOSITION</code>.</p>
   * @public
   */
  queryTransformationConfiguration?: QueryTransformationConfiguration | undefined;
}

/**
 * @public
 * @enum
 */
export const RetrieveAndGenerateType = {
  EXTERNAL_SOURCES: "EXTERNAL_SOURCES",
  KNOWLEDGE_BASE: "KNOWLEDGE_BASE",
} as const;

/**
 * @public
 */
export type RetrieveAndGenerateType = (typeof RetrieveAndGenerateType)[keyof typeof RetrieveAndGenerateType];

/**
 * <p>Contains configuration about the session with the knowledge base.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_RequestSyntax">RetrieveAndGenerate request</a> – in the <code>sessionConfiguration</code> field</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface RetrieveAndGenerateSessionConfiguration {
  /**
   * <p>The ARN of the KMS key encrypting the session.</p>
   * @public
   */
  kmsKeyArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const GuadrailAction = {
  INTERVENED: "INTERVENED",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type GuadrailAction = (typeof GuadrailAction)[keyof typeof GuadrailAction];

/**
 * <p>Contains the response generated from querying the knowledge base.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_ResponseSyntax">RetrieveAndGenerate response</a> – in the <code>output</code> field</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface RetrieveAndGenerateOutput {
  /**
   * <p>The response generated from querying the knowledge base.</p>
   * @public
   */
  text: string | undefined;
}

/**
 * @public
 */
export interface RetrieveAndGenerateResponse {
  /**
   * <p>The unique identifier of the session. When you first make a <code>RetrieveAndGenerate</code> request, Amazon Bedrock automatically generates this value. You must reuse this value for all subsequent requests in the same conversational session. This value allows Amazon Bedrock to maintain context and knowledge from previous interactions. You can't explicitly set the <code>sessionId</code> yourself.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>Contains the response generated from querying the knowledge base.</p>
   * @public
   */
  output: RetrieveAndGenerateOutput | undefined;

  /**
   * <p>A list of segments of the generated response that are based on sources in the knowledge base, alongside information about the sources.</p>
   * @public
   */
  citations?: Citation[] | undefined;

  /**
   * <p>Specifies if there is a guardrail intervention in the response.</p>
   * @public
   */
  guardrailAction?: GuadrailAction | undefined;
}

/**
 * <p>Contains the query made to the knowledge base.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_Retrieve.html#API_agent-runtime_Retrieve_RequestSyntax">Retrieve request</a> – in the <code>retrievalQuery</code> field</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface KnowledgeBaseQuery {
  /**
   * <p>The text of the query made to the knowledge base.</p>
   * @public
   */
  text: string | undefined;
}

/**
 * <p>Details about a result from querying the knowledge base.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_Retrieve.html#API_agent-runtime_Retrieve_ResponseSyntax">Retrieve response</a> – in the <code>retrievalResults</code> field</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface KnowledgeBaseRetrievalResult {
  /**
   * <p>Contains a chunk of text from a data source in the knowledge base.</p>
   * @public
   */
  content: RetrievalResultContent | undefined;

  /**
   * <p>Contains information about the location of the data source.</p>
   * @public
   */
  location?: RetrievalResultLocation | undefined;

  /**
   * <p>The level of relevance of the result to the query.</p>
   * @public
   */
  score?: number | undefined;

  /**
   * <p>Contains metadata attributes and their values for the file in the data source. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-ds.html#kb-ds-metadata">Metadata and filtering</a>.</p>
   * @public
   */
  metadata?: Record<string, __DocumentType> | undefined;
}

/**
 * @public
 */
export interface RetrieveResponse {
  /**
   * <p>A list of results from querying the knowledge base.</p>
   * @public
   */
  retrievalResults: KnowledgeBaseRetrievalResult[] | undefined;

  /**
   * <p>If there are more results than can fit in the response, the response returns a <code>nextToken</code>. Use this token in the <code>nextToken</code> field of another request to retrieve the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Specifies the filters to use on the metadata attributes in the knowledge base data sources before returning results. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/kb-test-config.html">Query configurations</a>. See the examples below to see how to use these filters.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_Retrieve.html#API_agent-runtime_Retrieve_RequestSyntax">Retrieve request</a> – in the <code>filter</code> field</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_RequestSyntax">RetrieveAndGenerate request</a> – in the <code>filter</code> field</p>
 *             </li>
 *          </ul>
 * @public
 */
export type RetrievalFilter =
  | RetrievalFilter.AndAllMember
  | RetrievalFilter.EqualsMember
  | RetrievalFilter.GreaterThanMember
  | RetrievalFilter.GreaterThanOrEqualsMember
  | RetrievalFilter.InMember
  | RetrievalFilter.LessThanMember
  | RetrievalFilter.LessThanOrEqualsMember
  | RetrievalFilter.ListContainsMember
  | RetrievalFilter.NotEqualsMember
  | RetrievalFilter.NotInMember
  | RetrievalFilter.OrAllMember
  | RetrievalFilter.StartsWithMember
  | RetrievalFilter.StringContainsMember
  | RetrievalFilter.$UnknownMember;

/**
 * @public
 */
export namespace RetrievalFilter {
  /**
   * <p>Knowledge base data sources are returned if they contain a metadata attribute whose name matches the <code>key</code> and whose value matches the <code>value</code> in this object.</p>
   *          <p>The following example would return data sources with an <code>animal</code> attribute whose value is <code>cat</code>:</p>
   *          <p>
   *             <code>"equals": \{ "key": "animal", "value": "cat" \}</code>
   *          </p>
   * @public
   */
  export interface EqualsMember {
    equals: FilterAttribute;
    notEquals?: never;
    greaterThan?: never;
    greaterThanOrEquals?: never;
    lessThan?: never;
    lessThanOrEquals?: never;
    in?: never;
    notIn?: never;
    startsWith?: never;
    listContains?: never;
    stringContains?: never;
    andAll?: never;
    orAll?: never;
    $unknown?: never;
  }

  /**
   * <p>Knowledge base data sources that contain a metadata attribute whose name matches the <code>key</code> and whose value doesn't match the <code>value</code> in this object are returned.</p>
   *          <p>The following example would return data sources that don't contain an <code>animal</code> attribute whose value is <code>cat</code>.</p>
   *          <p>
   *             <code>"notEquals": \{ "key": "animal", "value": "cat" \}</code>
   *          </p>
   * @public
   */
  export interface NotEqualsMember {
    equals?: never;
    notEquals: FilterAttribute;
    greaterThan?: never;
    greaterThanOrEquals?: never;
    lessThan?: never;
    lessThanOrEquals?: never;
    in?: never;
    notIn?: never;
    startsWith?: never;
    listContains?: never;
    stringContains?: never;
    andAll?: never;
    orAll?: never;
    $unknown?: never;
  }

  /**
   * <p>Knowledge base data sources are returned if they contain a metadata attribute whose name matches the <code>key</code> and whose value is greater than the <code>value</code> in this object.</p>
   *          <p>The following example would return data sources with an <code>year</code> attribute whose value is greater than <code>1989</code>:</p>
   *          <p>
   *             <code>"greaterThan": \{ "key": "year", "value": 1989 \}</code>
   *          </p>
   * @public
   */
  export interface GreaterThanMember {
    equals?: never;
    notEquals?: never;
    greaterThan: FilterAttribute;
    greaterThanOrEquals?: never;
    lessThan?: never;
    lessThanOrEquals?: never;
    in?: never;
    notIn?: never;
    startsWith?: never;
    listContains?: never;
    stringContains?: never;
    andAll?: never;
    orAll?: never;
    $unknown?: never;
  }

  /**
   * <p>Knowledge base data sources are returned if they contain a metadata attribute whose name matches the <code>key</code> and whose value is greater than or equal to the <code>value</code> in this object.</p>
   *          <p>The following example would return data sources with an <code>year</code> attribute whose value is greater than or equal to <code>1989</code>:</p>
   *          <p>
   *             <code>"greaterThanOrEquals": \{ "key": "year", "value": 1989 \}</code>
   *          </p>
   * @public
   */
  export interface GreaterThanOrEqualsMember {
    equals?: never;
    notEquals?: never;
    greaterThan?: never;
    greaterThanOrEquals: FilterAttribute;
    lessThan?: never;
    lessThanOrEquals?: never;
    in?: never;
    notIn?: never;
    startsWith?: never;
    listContains?: never;
    stringContains?: never;
    andAll?: never;
    orAll?: never;
    $unknown?: never;
  }

  /**
   * <p>Knowledge base data sources are returned if they contain a metadata attribute whose name matches the <code>key</code> and whose value is less than the <code>value</code> in this object.</p>
   *          <p>The following example would return data sources with an <code>year</code> attribute whose value is less than to <code>1989</code>.</p>
   *          <p>
   *             <code>"lessThan": \{ "key": "year", "value": 1989 \}</code>
   *          </p>
   * @public
   */
  export interface LessThanMember {
    equals?: never;
    notEquals?: never;
    greaterThan?: never;
    greaterThanOrEquals?: never;
    lessThan: FilterAttribute;
    lessThanOrEquals?: never;
    in?: never;
    notIn?: never;
    startsWith?: never;
    listContains?: never;
    stringContains?: never;
    andAll?: never;
    orAll?: never;
    $unknown?: never;
  }

  /**
   * <p>Knowledge base data sources are returned if they contain a metadata attribute whose name matches the <code>key</code> and whose value is less than or equal to the <code>value</code> in this object.</p>
   *          <p>The following example would return data sources with an <code>year</code> attribute whose value is less than or equal to <code>1989</code>.</p>
   *          <p>
   *             <code>"lessThanOrEquals": \{ "key": "year", "value": 1989 \}</code>
   *          </p>
   * @public
   */
  export interface LessThanOrEqualsMember {
    equals?: never;
    notEquals?: never;
    greaterThan?: never;
    greaterThanOrEquals?: never;
    lessThan?: never;
    lessThanOrEquals: FilterAttribute;
    in?: never;
    notIn?: never;
    startsWith?: never;
    listContains?: never;
    stringContains?: never;
    andAll?: never;
    orAll?: never;
    $unknown?: never;
  }

  /**
   * <p>Knowledge base data sources are returned if they contain a metadata attribute whose name matches the <code>key</code> and whose value is in the list specified in the <code>value</code> in this object.</p>
   *          <p>The following example would return data sources with an <code>animal</code> attribute that is either <code>cat</code> or <code>dog</code>:</p>
   *          <p>
   *             <code>"in": \{ "key": "animal", "value": ["cat", "dog"] \}</code>
   *          </p>
   * @public
   */
  export interface InMember {
    equals?: never;
    notEquals?: never;
    greaterThan?: never;
    greaterThanOrEquals?: never;
    lessThan?: never;
    lessThanOrEquals?: never;
    in: FilterAttribute;
    notIn?: never;
    startsWith?: never;
    listContains?: never;
    stringContains?: never;
    andAll?: never;
    orAll?: never;
    $unknown?: never;
  }

  /**
   * <p>Knowledge base data sources are returned if they contain a metadata attribute whose name matches the <code>key</code> and whose value isn't in the list specified in the <code>value</code> in this object.</p>
   *          <p>The following example would return data sources whose <code>animal</code> attribute is neither <code>cat</code> nor <code>dog</code>.</p>
   *          <p>
   *             <code>"notIn": \{ "key": "animal", "value": ["cat", "dog"] \}</code>
   *          </p>
   * @public
   */
  export interface NotInMember {
    equals?: never;
    notEquals?: never;
    greaterThan?: never;
    greaterThanOrEquals?: never;
    lessThan?: never;
    lessThanOrEquals?: never;
    in?: never;
    notIn: FilterAttribute;
    startsWith?: never;
    listContains?: never;
    stringContains?: never;
    andAll?: never;
    orAll?: never;
    $unknown?: never;
  }

  /**
   * <p>Knowledge base data sources are returned if they contain a metadata attribute whose name matches the <code>key</code> and whose value starts with the <code>value</code> in this object. This filter is currently only supported for Amazon OpenSearch Serverless vector stores.</p>
   *          <p>The following example would return data sources with an <code>animal</code> attribute starts with <code>ca</code> (for example, <code>cat</code> or <code>camel</code>).</p>
   *          <p>
   *             <code>"startsWith": \{ "key": "animal", "value": "ca" \}</code>
   *          </p>
   * @public
   */
  export interface StartsWithMember {
    equals?: never;
    notEquals?: never;
    greaterThan?: never;
    greaterThanOrEquals?: never;
    lessThan?: never;
    lessThanOrEquals?: never;
    in?: never;
    notIn?: never;
    startsWith: FilterAttribute;
    listContains?: never;
    stringContains?: never;
    andAll?: never;
    orAll?: never;
    $unknown?: never;
  }

  /**
   * <p>Knowledge base data sources are returned if they contain a metadata attribute whose name matches the <code>key</code> and whose value is a list that contains the <code>value</code> as one of its members.</p>
   *          <p>The following example would return data sources with an <code>animals</code> attribute that is a list containing a <code>cat</code> member (for example <code>["dog", "cat"]</code>).</p>
   *          <p>
   *             <code>"listContains": \{ "key": "animals", "value": "cat" \}</code>
   *          </p>
   * @public
   */
  export interface ListContainsMember {
    equals?: never;
    notEquals?: never;
    greaterThan?: never;
    greaterThanOrEquals?: never;
    lessThan?: never;
    lessThanOrEquals?: never;
    in?: never;
    notIn?: never;
    startsWith?: never;
    listContains: FilterAttribute;
    stringContains?: never;
    andAll?: never;
    orAll?: never;
    $unknown?: never;
  }

  /**
   * <p>Knowledge base data sources are returned if they contain a metadata attribute whose name matches the <code>key</code> and whose value is one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>A string that contains the <code>value</code> as a substring. The following example would return data sources with an <code>animal</code> attribute that contains the substring <code>at</code> (for example <code>cat</code>).</p>
   *                <p>
   *                   <code>"stringContains": \{ "key": "animal", "value": "at" \}</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>A list with a member that contains the <code>value</code> as a substring. The following example would return data sources with an <code>animals</code> attribute that is a list containing a member that contains the substring <code>at</code> (for example <code>["dog", "cat"]</code>).</p>
   *                <p>
   *                   <code>"stringContains": \{ "key": "animals", "value": "at" \}</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  export interface StringContainsMember {
    equals?: never;
    notEquals?: never;
    greaterThan?: never;
    greaterThanOrEquals?: never;
    lessThan?: never;
    lessThanOrEquals?: never;
    in?: never;
    notIn?: never;
    startsWith?: never;
    listContains?: never;
    stringContains: FilterAttribute;
    andAll?: never;
    orAll?: never;
    $unknown?: never;
  }

  /**
   * <p>Knowledge base data sources are returned if their metadata attributes fulfill all the filter conditions inside this list.</p>
   * @public
   */
  export interface AndAllMember {
    equals?: never;
    notEquals?: never;
    greaterThan?: never;
    greaterThanOrEquals?: never;
    lessThan?: never;
    lessThanOrEquals?: never;
    in?: never;
    notIn?: never;
    startsWith?: never;
    listContains?: never;
    stringContains?: never;
    andAll: RetrievalFilter[];
    orAll?: never;
    $unknown?: never;
  }

  /**
   * <p>Knowledge base data sources are returned if their metadata attributes fulfill at least one of the filter conditions inside this list.</p>
   * @public
   */
  export interface OrAllMember {
    equals?: never;
    notEquals?: never;
    greaterThan?: never;
    greaterThanOrEquals?: never;
    lessThan?: never;
    lessThanOrEquals?: never;
    in?: never;
    notIn?: never;
    startsWith?: never;
    listContains?: never;
    stringContains?: never;
    andAll?: never;
    orAll: RetrievalFilter[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    equals?: never;
    notEquals?: never;
    greaterThan?: never;
    greaterThanOrEquals?: never;
    lessThan?: never;
    lessThanOrEquals?: never;
    in?: never;
    notIn?: never;
    startsWith?: never;
    listContains?: never;
    stringContains?: never;
    andAll?: never;
    orAll?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    equals: (value: FilterAttribute) => T;
    notEquals: (value: FilterAttribute) => T;
    greaterThan: (value: FilterAttribute) => T;
    greaterThanOrEquals: (value: FilterAttribute) => T;
    lessThan: (value: FilterAttribute) => T;
    lessThanOrEquals: (value: FilterAttribute) => T;
    in: (value: FilterAttribute) => T;
    notIn: (value: FilterAttribute) => T;
    startsWith: (value: FilterAttribute) => T;
    listContains: (value: FilterAttribute) => T;
    stringContains: (value: FilterAttribute) => T;
    andAll: (value: RetrievalFilter[]) => T;
    orAll: (value: RetrievalFilter[]) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: RetrievalFilter, visitor: Visitor<T>): T => {
    if (value.equals !== undefined) return visitor.equals(value.equals);
    if (value.notEquals !== undefined) return visitor.notEquals(value.notEquals);
    if (value.greaterThan !== undefined) return visitor.greaterThan(value.greaterThan);
    if (value.greaterThanOrEquals !== undefined) return visitor.greaterThanOrEquals(value.greaterThanOrEquals);
    if (value.lessThan !== undefined) return visitor.lessThan(value.lessThan);
    if (value.lessThanOrEquals !== undefined) return visitor.lessThanOrEquals(value.lessThanOrEquals);
    if (value.in !== undefined) return visitor.in(value.in);
    if (value.notIn !== undefined) return visitor.notIn(value.notIn);
    if (value.startsWith !== undefined) return visitor.startsWith(value.startsWith);
    if (value.listContains !== undefined) return visitor.listContains(value.listContains);
    if (value.stringContains !== undefined) return visitor.stringContains(value.stringContains);
    if (value.andAll !== undefined) return visitor.andAll(value.andAll);
    if (value.orAll !== undefined) return visitor.orAll(value.orAll);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Configurations for how to perform the search query and return results. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/kb-test-config.html">Query configurations</a>.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_Retrieve.html#API_agent-runtime_Retrieve_RequestSyntax">Retrieve request</a> – in the <code>vectorSearchConfiguration</code> field</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_RequestSyntax">RetrieveAndGenerate request</a> – in the <code>vectorSearchConfiguration</code> field</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface KnowledgeBaseVectorSearchConfiguration {
  /**
   * <p>The number of source chunks to retrieve.</p>
   * @public
   */
  numberOfResults?: number | undefined;

  /**
   * <p>By default, Amazon Bedrock decides a search strategy for you. If you're using an Amazon OpenSearch Serverless vector store that contains a filterable text field, you can specify whether to query the knowledge base with a <code>HYBRID</code> search using both vector embeddings and raw text, or <code>SEMANTIC</code> search using only vector embeddings. For other vector store configurations, only <code>SEMANTIC</code> search is available. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-test.html">Test a knowledge base</a>.</p>
   * @public
   */
  overrideSearchType?: SearchType | undefined;

  /**
   * <p>Specifies the filters to use on the metadata in the knowledge base data sources before returning results. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/kb-test-config.html">Query configurations</a>.</p>
   * @public
   */
  filter?: RetrievalFilter | undefined;
}

/**
 * <p>Contains configurations for knowledge base query. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/kb-test-config.html">Query configurations</a>.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_Retrieve.html#API_agent-runtime_Retrieve_RequestSyntax">Retrieve request</a> – in the <code>retrievalConfiguration</code> field</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_RequestSyntax">RetrieveAndGenerate request</a> – in the <code>retrievalConfiguration</code> field</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface KnowledgeBaseRetrievalConfiguration {
  /**
   * <p>Contains details about how the results from the vector search should be returned. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/kb-test-config.html">Query configurations</a>.</p>
   * @public
   */
  vectorSearchConfiguration: KnowledgeBaseVectorSearchConfiguration | undefined;
}

/**
 * <p>Configurations to apply to a knowledge base attached to the agent during query. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-session-state.html#session-state-kb">Knowledge base retrieval configurations</a>.</p>
 * @public
 */
export interface KnowledgeBaseConfiguration {
  /**
   * <p>The unique identifier for a knowledge base attached to the agent.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The configurations to apply to the knowledge base during query. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/kb-test-config.html">Query configurations</a>.</p>
   * @public
   */
  retrievalConfiguration: KnowledgeBaseRetrievalConfiguration | undefined;
}

/**
 * <p>Contains details about the resource being queried.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_Retrieve.html#API_agent-runtime_Retrieve_RequestSyntax">Retrieve request</a> – in the <code>knowledgeBaseConfiguration</code> field</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_RequestSyntax">RetrieveAndGenerate request</a> – in the <code>knowledgeBaseConfiguration</code> field</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface KnowledgeBaseRetrieveAndGenerateConfiguration {
  /**
   * <p>The unique identifier of the knowledge base that is queried.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The ARN of the foundation model or <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference.html">inference profile</a> used to generate a response.</p>
   * @public
   */
  modelArn: string | undefined;

  /**
   * <p>Contains configurations for how to retrieve and return the knowledge base query.</p>
   * @public
   */
  retrievalConfiguration?: KnowledgeBaseRetrievalConfiguration | undefined;

  /**
   * <p>Contains configurations for response generation based on the knowledge base query results.</p>
   * @public
   */
  generationConfiguration?: GenerationConfiguration | undefined;

  /**
   * <p>Settings for how the model processes the prompt prior to retrieval and generation.</p>
   * @public
   */
  orchestrationConfiguration?: OrchestrationConfiguration | undefined;
}

/**
 * @public
 */
export interface RetrieveRequest {
  /**
   * <p>The unique identifier of the knowledge base to query.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>Contains the query to send the knowledge base.</p>
   * @public
   */
  retrievalQuery: KnowledgeBaseQuery | undefined;

  /**
   * <p>Contains configurations for the knowledge base query and retrieval process. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/kb-test-config.html">Query configurations</a>.</p>
   * @public
   */
  retrievalConfiguration?: KnowledgeBaseRetrievalConfiguration | undefined;

  /**
   * <p>If there are more results than can fit in the response, the response returns a <code>nextToken</code>. Use this token in the <code>nextToken</code> field of another request to retrieve the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains details about the resource being queried.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_RequestSyntax">RetrieveAndGenerate request</a> – in the <code>retrieveAndGenerateConfiguration</code> field</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface RetrieveAndGenerateConfiguration {
  /**
   * <p>The type of resource that contains your data for retrieving information and generating responses.</p>
   *          <p>If you choose ot use <code>EXTERNAL_SOURCES</code>, then currently only Claude 3 Sonnet models for knowledge bases are supported.</p>
   * @public
   */
  type: RetrieveAndGenerateType | undefined;

  /**
   * <p>Contains details about the knowledge base for retrieving information and generating responses.</p>
   * @public
   */
  knowledgeBaseConfiguration?: KnowledgeBaseRetrieveAndGenerateConfiguration | undefined;

  /**
   * <p>The configuration for the external source wrapper object in the <code>retrieveAndGenerate</code> function.</p>
   * @public
   */
  externalSourcesConfiguration?: ExternalSourcesRetrieveAndGenerateConfiguration | undefined;
}

/**
 * @public
 */
export interface RetrieveAndGenerateRequest {
  /**
   * <p>The unique identifier of the session. When you first make a <code>RetrieveAndGenerate</code> request, Amazon Bedrock automatically generates this value. You must reuse this value for all subsequent requests in the same conversational session. This value allows Amazon Bedrock to maintain context and knowledge from previous interactions. You can't explicitly set the <code>sessionId</code> yourself.</p>
   * @public
   */
  sessionId?: string | undefined;

  /**
   * <p>Contains the query to be made to the knowledge base.</p>
   * @public
   */
  input: RetrieveAndGenerateInput | undefined;

  /**
   * <p>Contains configurations for the knowledge base query and retrieval process. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/kb-test-config.html">Query configurations</a>.</p>
   * @public
   */
  retrieveAndGenerateConfiguration?: RetrieveAndGenerateConfiguration | undefined;

  /**
   * <p>Contains details about the session with the knowledge base.</p>
   * @public
   */
  sessionConfiguration?: RetrieveAndGenerateSessionConfiguration | undefined;
}

/**
 * <p>Contains parameters that specify various attributes that persist across a session or prompt. You can define session state attributes as key-value pairs when writing a <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-lambda.html">Lambda function</a> for an action group or pass them when making an <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html">InvokeAgent</a> request. Use session state attributes to control and provide conversational context for your agent and to help customize your agent's behavior. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-session-state.html">Control session context</a>.</p>
 * @public
 */
export interface SessionState {
  /**
   * <p>Contains attributes that persist across a session and the values of those attributes.</p>
   * @public
   */
  sessionAttributes?: Record<string, string> | undefined;

  /**
   * <p>Contains attributes that persist across a prompt and the values of those attributes. These attributes replace the $prompt_session_attributes$ placeholder variable in the orchestration prompt template. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-placeholders.html">Prompt template placeholder variables</a>.</p>
   * @public
   */
  promptSessionAttributes?: Record<string, string> | undefined;

  /**
   * <p>Contains information about the results from the action group invocation. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-returncontrol.html">Return control to the agent developer</a> and <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-session-state.html">Control session context</a>.</p>
   *          <note>
   *             <p>If you include this field, the <code>inputText</code> field will be ignored.</p>
   *          </note>
   * @public
   */
  returnControlInvocationResults?: InvocationResultMember[] | undefined;

  /**
   * <p>The identifier of the invocation of an action. This value must match the <code>invocationId</code> returned in the <code>InvokeAgent</code> response for the action whose results are provided in the <code>returnControlInvocationResults</code> field. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-returncontrol.html">Return control to the agent developer</a> and <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-session-state.html">Control session context</a>.</p>
   * @public
   */
  invocationId?: string | undefined;

  /**
   * <p>Contains information about the files used by code interpreter.</p>
   * @public
   */
  files?: InputFile[] | undefined;

  /**
   * <p>An array of configurations, each of which applies to a knowledge base attached to the agent.</p>
   * @public
   */
  knowledgeBaseConfigurations?: KnowledgeBaseConfiguration[] | undefined;
}

/**
 * @public
 */
export interface InvokeAgentRequest {
  /**
   * <p>Contains parameters that specify various attributes of the session. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-session-state.html">Control session context</a>.</p>
   *          <note>
   *             <p>If you include <code>returnControlInvocationResults</code> in the <code>sessionState</code> field, the <code>inputText</code> field will be ignored.</p>
   *          </note>
   * @public
   */
  sessionState?: SessionState | undefined;

  /**
   * <p>The unique identifier of the agent to use.</p>
   * @public
   */
  agentId: string | undefined;

  /**
   * <p>The alias of the agent to use.</p>
   * @public
   */
  agentAliasId: string | undefined;

  /**
   * <p>The unique identifier of the session. Use the same value across requests to continue the same conversation.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>Specifies whether to end the session with the agent or not.</p>
   * @public
   */
  endSession?: boolean | undefined;

  /**
   * <p>Specifies whether to turn on the trace or not to track the agent's reasoning process. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-test.html#trace-events">Trace enablement</a>.</p>
   * @public
   */
  enableTrace?: boolean | undefined;

  /**
   * <p>The prompt text to send the agent.</p>
   *          <note>
   *             <p>If you include <code>returnControlInvocationResults</code> in the <code>sessionState</code> field, the <code>inputText</code> field will be ignored.</p>
   *          </note>
   * @public
   */
  inputText?: string | undefined;

  /**
   * <p>The unique identifier of the agent memory.</p>
   * @public
   */
  memoryId?: string | undefined;
}

/**
 * @internal
 */
export const ActionGroupInvocationInputFilterSensitiveLog = (obj: ActionGroupInvocationInput): any => ({
  ...obj,
  ...(obj.actionGroupName && { actionGroupName: SENSITIVE_STRING }),
  ...(obj.verb && { verb: SENSITIVE_STRING }),
  ...(obj.apiPath && { apiPath: SENSITIVE_STRING }),
  ...(obj.function && { function: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ActionGroupInvocationOutputFilterSensitiveLog = (obj: ActionGroupInvocationOutput): any => ({
  ...obj,
  ...(obj.text && { text: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const FlowInputContentFilterSensitiveLog = (obj: FlowInputContent): any => {
  if (obj.document !== undefined) return { document: obj.document };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const FlowInputFilterSensitiveLog = (obj: FlowInput): any => ({
  ...obj,
  ...(obj.content && { content: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const InvokeFlowRequestFilterSensitiveLog = (obj: InvokeFlowRequest): any => ({
  ...obj,
  ...(obj.inputs && { inputs: obj.inputs.map((item) => FlowInputFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const FlowCompletionEventFilterSensitiveLog = (obj: FlowCompletionEvent): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FlowOutputEventFilterSensitiveLog = (obj: FlowOutputEvent): any => ({
  ...obj,
  ...(obj.content && { content: obj.content }),
});

/**
 * @internal
 */
export const FlowTraceConditionFilterSensitiveLog = (obj: FlowTraceCondition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FlowTraceConditionNodeResultEventFilterSensitiveLog = (obj: FlowTraceConditionNodeResultEvent): any => ({
  ...obj,
  ...(obj.satisfiedConditions && { satisfiedConditions: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const FlowTraceNodeInputContentFilterSensitiveLog = (obj: FlowTraceNodeInputContent): any => {
  if (obj.document !== undefined) return { document: obj.document };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const FlowTraceNodeInputFieldFilterSensitiveLog = (obj: FlowTraceNodeInputField): any => ({
  ...obj,
  ...(obj.content && { content: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const FlowTraceNodeInputEventFilterSensitiveLog = (obj: FlowTraceNodeInputEvent): any => ({
  ...obj,
  ...(obj.fields && { fields: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const FlowTraceNodeOutputFieldFilterSensitiveLog = (obj: FlowTraceNodeOutputField): any => ({
  ...obj,
  ...(obj.content && { content: obj.content }),
});

/**
 * @internal
 */
export const FlowTraceNodeOutputEventFilterSensitiveLog = (obj: FlowTraceNodeOutputEvent): any => ({
  ...obj,
  ...(obj.fields && { fields: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const FlowTraceFilterSensitiveLog = (obj: FlowTrace): any => {
  if (obj.nodeInputTrace !== undefined) return { nodeInputTrace: SENSITIVE_STRING };
  if (obj.nodeOutputTrace !== undefined) return { nodeOutputTrace: SENSITIVE_STRING };
  if (obj.conditionNodeResultTrace !== undefined) return { conditionNodeResultTrace: SENSITIVE_STRING };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const FlowTraceEventFilterSensitiveLog = (obj: FlowTraceEvent): any => ({
  ...obj,
  ...(obj.trace && { trace: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const FlowResponseStreamFilterSensitiveLog = (obj: FlowResponseStream): any => {
  if (obj.flowOutputEvent !== undefined) return { flowOutputEvent: SENSITIVE_STRING };
  if (obj.flowCompletionEvent !== undefined) return { flowCompletionEvent: SENSITIVE_STRING };
  if (obj.flowTraceEvent !== undefined) return { flowTraceEvent: FlowTraceEventFilterSensitiveLog(obj.flowTraceEvent) };
  if (obj.internalServerException !== undefined) return { internalServerException: obj.internalServerException };
  if (obj.validationException !== undefined) return { validationException: obj.validationException };
  if (obj.resourceNotFoundException !== undefined) return { resourceNotFoundException: obj.resourceNotFoundException };
  if (obj.serviceQuotaExceededException !== undefined)
    return { serviceQuotaExceededException: obj.serviceQuotaExceededException };
  if (obj.throttlingException !== undefined) return { throttlingException: obj.throttlingException };
  if (obj.accessDeniedException !== undefined) return { accessDeniedException: obj.accessDeniedException };
  if (obj.conflictException !== undefined) return { conflictException: obj.conflictException };
  if (obj.dependencyFailedException !== undefined) return { dependencyFailedException: obj.dependencyFailedException };
  if (obj.badGatewayException !== undefined) return { badGatewayException: obj.badGatewayException };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const InvokeFlowResponseFilterSensitiveLog = (obj: InvokeFlowResponse): any => ({
  ...obj,
  ...(obj.responseStream && { responseStream: "STREAMING_CONTENT" }),
});

/**
 * @internal
 */
export const ByteContentFileFilterSensitiveLog = (obj: ByteContentFile): any => ({
  ...obj,
  ...(obj.data && { data: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const FileSourceFilterSensitiveLog = (obj: FileSource): any => ({
  ...obj,
  ...(obj.byteContent && { byteContent: ByteContentFileFilterSensitiveLog(obj.byteContent) }),
});

/**
 * @internal
 */
export const InputFileFilterSensitiveLog = (obj: InputFile): any => ({
  ...obj,
  ...(obj.source && { source: FileSourceFilterSensitiveLog(obj.source) }),
});

/**
 * @internal
 */
export const ApiResultFilterSensitiveLog = (obj: ApiResult): any => ({
  ...obj,
  ...(obj.apiPath && { apiPath: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const InvocationResultMemberFilterSensitiveLog = (obj: InvocationResultMember): any => {
  if (obj.apiResult !== undefined) return { apiResult: ApiResultFilterSensitiveLog(obj.apiResult) };
  if (obj.functionResult !== undefined) return { functionResult: obj.functionResult };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const TextResponsePartFilterSensitiveLog = (obj: TextResponsePart): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GeneratedResponsePartFilterSensitiveLog = (obj: GeneratedResponsePart): any => ({
  ...obj,
  ...(obj.textResponsePart && { textResponsePart: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RetrievalResultContentFilterSensitiveLog = (obj: RetrievalResultContent): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RetrievalResultLocationFilterSensitiveLog = (obj: RetrievalResultLocation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RetrievedReferenceFilterSensitiveLog = (obj: RetrievedReference): any => ({
  ...obj,
  ...(obj.content && { content: SENSITIVE_STRING }),
  ...(obj.location && { location: SENSITIVE_STRING }),
  ...(obj.metadata && { metadata: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CitationFilterSensitiveLog = (obj: Citation): any => ({
  ...obj,
  ...(obj.generatedResponsePart && {
    generatedResponsePart: GeneratedResponsePartFilterSensitiveLog(obj.generatedResponsePart),
  }),
  ...(obj.retrievedReferences && {
    retrievedReferences: obj.retrievedReferences.map((item) => RetrievedReferenceFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const AttributionFilterSensitiveLog = (obj: Attribution): any => ({
  ...obj,
  ...(obj.citations && { citations: obj.citations.map((item) => CitationFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const PayloadPartFilterSensitiveLog = (obj: PayloadPart): any => ({
  ...obj,
  ...(obj.bytes && { bytes: SENSITIVE_STRING }),
  ...(obj.attribution && { attribution: AttributionFilterSensitiveLog(obj.attribution) }),
});

/**
 * @internal
 */
export const OutputFileFilterSensitiveLog = (obj: OutputFile): any => ({
  ...obj,
  ...(obj.bytes && { bytes: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const FilePartFilterSensitiveLog = (obj: FilePart): any => ({
  ...obj,
  ...(obj.files && { files: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ApiInvocationInputFilterSensitiveLog = (obj: ApiInvocationInput): any => ({
  ...obj,
  ...(obj.apiPath && { apiPath: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const InvocationInputMemberFilterSensitiveLog = (obj: InvocationInputMember): any => {
  if (obj.apiInvocationInput !== undefined)
    return { apiInvocationInput: ApiInvocationInputFilterSensitiveLog(obj.apiInvocationInput) };
  if (obj.functionInvocationInput !== undefined) return { functionInvocationInput: obj.functionInvocationInput };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const ReturnControlPayloadFilterSensitiveLog = (obj: ReturnControlPayload): any => ({
  ...obj,
  ...(obj.invocationInputs && {
    invocationInputs: obj.invocationInputs.map((item) => InvocationInputMemberFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const FailureTraceFilterSensitiveLog = (obj: FailureTrace): any => ({
  ...obj,
  ...(obj.failureReason && { failureReason: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GuardrailContentFilterFilterSensitiveLog = (obj: GuardrailContentFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GuardrailContentPolicyAssessmentFilterSensitiveLog = (obj: GuardrailContentPolicyAssessment): any => ({
  ...obj,
  ...(obj.filters && { filters: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GuardrailPiiEntityFilterFilterSensitiveLog = (obj: GuardrailPiiEntityFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GuardrailRegexFilterFilterSensitiveLog = (obj: GuardrailRegexFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GuardrailSensitiveInformationPolicyAssessmentFilterSensitiveLog = (
  obj: GuardrailSensitiveInformationPolicyAssessment
): any => ({
  ...obj,
  ...(obj.piiEntities && { piiEntities: SENSITIVE_STRING }),
  ...(obj.regexes && { regexes: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GuardrailTopicFilterSensitiveLog = (obj: GuardrailTopic): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GuardrailTopicPolicyAssessmentFilterSensitiveLog = (obj: GuardrailTopicPolicyAssessment): any => ({
  ...obj,
  ...(obj.topics && { topics: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GuardrailCustomWordFilterSensitiveLog = (obj: GuardrailCustomWord): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GuardrailManagedWordFilterSensitiveLog = (obj: GuardrailManagedWord): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GuardrailWordPolicyAssessmentFilterSensitiveLog = (obj: GuardrailWordPolicyAssessment): any => ({
  ...obj,
  ...(obj.customWords && { customWords: SENSITIVE_STRING }),
  ...(obj.managedWordLists && { managedWordLists: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GuardrailAssessmentFilterSensitiveLog = (obj: GuardrailAssessment): any => ({
  ...obj,
  ...(obj.topicPolicy && { topicPolicy: SENSITIVE_STRING }),
  ...(obj.contentPolicy && { contentPolicy: SENSITIVE_STRING }),
  ...(obj.wordPolicy && { wordPolicy: SENSITIVE_STRING }),
  ...(obj.sensitiveInformationPolicy && { sensitiveInformationPolicy: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GuardrailTraceFilterSensitiveLog = (obj: GuardrailTrace): any => ({
  ...obj,
  ...(obj.inputAssessments && { inputAssessments: SENSITIVE_STRING }),
  ...(obj.outputAssessments && { outputAssessments: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const KnowledgeBaseLookupInputFilterSensitiveLog = (obj: KnowledgeBaseLookupInput): any => ({
  ...obj,
  ...(obj.text && { text: SENSITIVE_STRING }),
  ...(obj.knowledgeBaseId && { knowledgeBaseId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const InvocationInputFilterSensitiveLog = (obj: InvocationInput): any => ({
  ...obj,
  ...(obj.actionGroupInvocationInput && {
    actionGroupInvocationInput: ActionGroupInvocationInputFilterSensitiveLog(obj.actionGroupInvocationInput),
  }),
  ...(obj.knowledgeBaseLookupInput && {
    knowledgeBaseLookupInput: KnowledgeBaseLookupInputFilterSensitiveLog(obj.knowledgeBaseLookupInput),
  }),
});

/**
 * @internal
 */
export const ModelInvocationInputFilterSensitiveLog = (obj: ModelInvocationInput): any => ({
  ...obj,
  ...(obj.text && { text: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UsageFilterSensitiveLog = (obj: Usage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MetadataFilterSensitiveLog = (obj: Metadata): any => ({
  ...obj,
  ...(obj.usage && { usage: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RawResponseFilterSensitiveLog = (obj: RawResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OrchestrationModelInvocationOutputFilterSensitiveLog = (obj: OrchestrationModelInvocationOutput): any => ({
  ...obj,
  ...(obj.rawResponse && { rawResponse: SENSITIVE_STRING }),
  ...(obj.metadata && { metadata: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const FinalResponseFilterSensitiveLog = (obj: FinalResponse): any => ({
  ...obj,
  ...(obj.text && { text: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const KnowledgeBaseLookupOutputFilterSensitiveLog = (obj: KnowledgeBaseLookupOutput): any => ({
  ...obj,
  ...(obj.retrievedReferences && {
    retrievedReferences: obj.retrievedReferences.map((item) => RetrievedReferenceFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const RepromptResponseFilterSensitiveLog = (obj: RepromptResponse): any => ({
  ...obj,
  ...(obj.source && { source: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ObservationFilterSensitiveLog = (obj: Observation): any => ({
  ...obj,
  ...(obj.actionGroupInvocationOutput && {
    actionGroupInvocationOutput: ActionGroupInvocationOutputFilterSensitiveLog(obj.actionGroupInvocationOutput),
  }),
  ...(obj.knowledgeBaseLookupOutput && {
    knowledgeBaseLookupOutput: KnowledgeBaseLookupOutputFilterSensitiveLog(obj.knowledgeBaseLookupOutput),
  }),
  ...(obj.finalResponse && { finalResponse: FinalResponseFilterSensitiveLog(obj.finalResponse) }),
  ...(obj.repromptResponse && { repromptResponse: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RationaleFilterSensitiveLog = (obj: Rationale): any => ({
  ...obj,
  ...(obj.text && { text: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const OrchestrationTraceFilterSensitiveLog = (obj: OrchestrationTrace): any => {
  if (obj.rationale !== undefined) return { rationale: SENSITIVE_STRING };
  if (obj.invocationInput !== undefined) return { invocationInput: SENSITIVE_STRING };
  if (obj.observation !== undefined) return { observation: SENSITIVE_STRING };
  if (obj.modelInvocationInput !== undefined) return { modelInvocationInput: SENSITIVE_STRING };
  if (obj.modelInvocationOutput !== undefined) return { modelInvocationOutput: SENSITIVE_STRING };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const PostProcessingParsedResponseFilterSensitiveLog = (obj: PostProcessingParsedResponse): any => ({
  ...obj,
  ...(obj.text && { text: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PostProcessingModelInvocationOutputFilterSensitiveLog = (
  obj: PostProcessingModelInvocationOutput
): any => ({
  ...obj,
  ...(obj.parsedResponse && { parsedResponse: SENSITIVE_STRING }),
  ...(obj.rawResponse && { rawResponse: SENSITIVE_STRING }),
  ...(obj.metadata && { metadata: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PostProcessingTraceFilterSensitiveLog = (obj: PostProcessingTrace): any => {
  if (obj.modelInvocationInput !== undefined) return { modelInvocationInput: SENSITIVE_STRING };
  if (obj.modelInvocationOutput !== undefined) return { modelInvocationOutput: SENSITIVE_STRING };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const PreProcessingParsedResponseFilterSensitiveLog = (obj: PreProcessingParsedResponse): any => ({
  ...obj,
  ...(obj.rationale && { rationale: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PreProcessingModelInvocationOutputFilterSensitiveLog = (obj: PreProcessingModelInvocationOutput): any => ({
  ...obj,
  ...(obj.parsedResponse && { parsedResponse: SENSITIVE_STRING }),
  ...(obj.rawResponse && { rawResponse: SENSITIVE_STRING }),
  ...(obj.metadata && { metadata: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PreProcessingTraceFilterSensitiveLog = (obj: PreProcessingTrace): any => {
  if (obj.modelInvocationInput !== undefined) return { modelInvocationInput: SENSITIVE_STRING };
  if (obj.modelInvocationOutput !== undefined) return { modelInvocationOutput: SENSITIVE_STRING };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const TraceFilterSensitiveLog = (obj: Trace): any => {
  if (obj.guardrailTrace !== undefined) return { guardrailTrace: SENSITIVE_STRING };
  if (obj.preProcessingTrace !== undefined) return { preProcessingTrace: SENSITIVE_STRING };
  if (obj.orchestrationTrace !== undefined) return { orchestrationTrace: SENSITIVE_STRING };
  if (obj.postProcessingTrace !== undefined) return { postProcessingTrace: SENSITIVE_STRING };
  if (obj.failureTrace !== undefined) return { failureTrace: SENSITIVE_STRING };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const TracePartFilterSensitiveLog = (obj: TracePart): any => ({
  ...obj,
  ...(obj.trace && { trace: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ResponseStreamFilterSensitiveLog = (obj: ResponseStream): any => {
  if (obj.chunk !== undefined) return { chunk: SENSITIVE_STRING };
  if (obj.trace !== undefined) return { trace: SENSITIVE_STRING };
  if (obj.returnControl !== undefined) return { returnControl: SENSITIVE_STRING };
  if (obj.internalServerException !== undefined) return { internalServerException: obj.internalServerException };
  if (obj.validationException !== undefined) return { validationException: obj.validationException };
  if (obj.resourceNotFoundException !== undefined) return { resourceNotFoundException: obj.resourceNotFoundException };
  if (obj.serviceQuotaExceededException !== undefined)
    return { serviceQuotaExceededException: obj.serviceQuotaExceededException };
  if (obj.throttlingException !== undefined) return { throttlingException: obj.throttlingException };
  if (obj.accessDeniedException !== undefined) return { accessDeniedException: obj.accessDeniedException };
  if (obj.conflictException !== undefined) return { conflictException: obj.conflictException };
  if (obj.dependencyFailedException !== undefined) return { dependencyFailedException: obj.dependencyFailedException };
  if (obj.badGatewayException !== undefined) return { badGatewayException: obj.badGatewayException };
  if (obj.files !== undefined) return { files: FilePartFilterSensitiveLog(obj.files) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const InvokeAgentResponseFilterSensitiveLog = (obj: InvokeAgentResponse): any => ({
  ...obj,
  ...(obj.completion && { completion: "STREAMING_CONTENT" }),
});

/**
 * @internal
 */
export const RetrieveAndGenerateInputFilterSensitiveLog = (obj: RetrieveAndGenerateInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PromptTemplateFilterSensitiveLog = (obj: PromptTemplate): any => ({
  ...obj,
  ...(obj.textPromptTemplate && { textPromptTemplate: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ExternalSourcesGenerationConfigurationFilterSensitiveLog = (
  obj: ExternalSourcesGenerationConfiguration
): any => ({
  ...obj,
  ...(obj.promptTemplate && { promptTemplate: PromptTemplateFilterSensitiveLog(obj.promptTemplate) }),
});

/**
 * @internal
 */
export const ByteContentDocFilterSensitiveLog = (obj: ByteContentDoc): any => ({
  ...obj,
  ...(obj.identifier && { identifier: SENSITIVE_STRING }),
  ...(obj.data && { data: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ExternalSourceFilterSensitiveLog = (obj: ExternalSource): any => ({
  ...obj,
  ...(obj.byteContent && { byteContent: ByteContentDocFilterSensitiveLog(obj.byteContent) }),
});

/**
 * @internal
 */
export const ExternalSourcesRetrieveAndGenerateConfigurationFilterSensitiveLog = (
  obj: ExternalSourcesRetrieveAndGenerateConfiguration
): any => ({
  ...obj,
  ...(obj.sources && { sources: obj.sources.map((item) => ExternalSourceFilterSensitiveLog(item)) }),
  ...(obj.generationConfiguration && {
    generationConfiguration: ExternalSourcesGenerationConfigurationFilterSensitiveLog(obj.generationConfiguration),
  }),
});

/**
 * @internal
 */
export const GenerationConfigurationFilterSensitiveLog = (obj: GenerationConfiguration): any => ({
  ...obj,
  ...(obj.promptTemplate && { promptTemplate: PromptTemplateFilterSensitiveLog(obj.promptTemplate) }),
});

/**
 * @internal
 */
export const OrchestrationConfigurationFilterSensitiveLog = (obj: OrchestrationConfiguration): any => ({
  ...obj,
  ...(obj.promptTemplate && { promptTemplate: PromptTemplateFilterSensitiveLog(obj.promptTemplate) }),
});

/**
 * @internal
 */
export const RetrieveAndGenerateOutputFilterSensitiveLog = (obj: RetrieveAndGenerateOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RetrieveAndGenerateResponseFilterSensitiveLog = (obj: RetrieveAndGenerateResponse): any => ({
  ...obj,
  ...(obj.output && { output: SENSITIVE_STRING }),
  ...(obj.citations && { citations: obj.citations.map((item) => CitationFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const KnowledgeBaseQueryFilterSensitiveLog = (obj: KnowledgeBaseQuery): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KnowledgeBaseRetrievalResultFilterSensitiveLog = (obj: KnowledgeBaseRetrievalResult): any => ({
  ...obj,
  ...(obj.content && { content: SENSITIVE_STRING }),
  ...(obj.location && { location: SENSITIVE_STRING }),
  ...(obj.metadata && { metadata: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RetrieveResponseFilterSensitiveLog = (obj: RetrieveResponse): any => ({
  ...obj,
  ...(obj.retrievalResults && { retrievalResults: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RetrievalFilterFilterSensitiveLog = (obj: RetrievalFilter): any => {
  if (obj.equals !== undefined) return { equals: obj.equals };
  if (obj.notEquals !== undefined) return { notEquals: obj.notEquals };
  if (obj.greaterThan !== undefined) return { greaterThan: obj.greaterThan };
  if (obj.greaterThanOrEquals !== undefined) return { greaterThanOrEquals: obj.greaterThanOrEquals };
  if (obj.lessThan !== undefined) return { lessThan: obj.lessThan };
  if (obj.lessThanOrEquals !== undefined) return { lessThanOrEquals: obj.lessThanOrEquals };
  if (obj.in !== undefined) return { in: obj.in };
  if (obj.notIn !== undefined) return { notIn: obj.notIn };
  if (obj.startsWith !== undefined) return { startsWith: obj.startsWith };
  if (obj.listContains !== undefined) return { listContains: obj.listContains };
  if (obj.stringContains !== undefined) return { stringContains: obj.stringContains };
  if (obj.andAll !== undefined) return { andAll: SENSITIVE_STRING };
  if (obj.orAll !== undefined) return { orAll: SENSITIVE_STRING };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const KnowledgeBaseVectorSearchConfigurationFilterSensitiveLog = (
  obj: KnowledgeBaseVectorSearchConfiguration
): any => ({
  ...obj,
  ...(obj.filter && { filter: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const KnowledgeBaseRetrievalConfigurationFilterSensitiveLog = (
  obj: KnowledgeBaseRetrievalConfiguration
): any => ({
  ...obj,
  ...(obj.vectorSearchConfiguration && {
    vectorSearchConfiguration: KnowledgeBaseVectorSearchConfigurationFilterSensitiveLog(obj.vectorSearchConfiguration),
  }),
});

/**
 * @internal
 */
export const KnowledgeBaseConfigurationFilterSensitiveLog = (obj: KnowledgeBaseConfiguration): any => ({
  ...obj,
  ...(obj.retrievalConfiguration && {
    retrievalConfiguration: KnowledgeBaseRetrievalConfigurationFilterSensitiveLog(obj.retrievalConfiguration),
  }),
});

/**
 * @internal
 */
export const KnowledgeBaseRetrieveAndGenerateConfigurationFilterSensitiveLog = (
  obj: KnowledgeBaseRetrieveAndGenerateConfiguration
): any => ({
  ...obj,
  ...(obj.retrievalConfiguration && {
    retrievalConfiguration: KnowledgeBaseRetrievalConfigurationFilterSensitiveLog(obj.retrievalConfiguration),
  }),
  ...(obj.generationConfiguration && {
    generationConfiguration: GenerationConfigurationFilterSensitiveLog(obj.generationConfiguration),
  }),
  ...(obj.orchestrationConfiguration && {
    orchestrationConfiguration: OrchestrationConfigurationFilterSensitiveLog(obj.orchestrationConfiguration),
  }),
});

/**
 * @internal
 */
export const RetrieveRequestFilterSensitiveLog = (obj: RetrieveRequest): any => ({
  ...obj,
  ...(obj.retrievalQuery && { retrievalQuery: SENSITIVE_STRING }),
  ...(obj.retrievalConfiguration && {
    retrievalConfiguration: KnowledgeBaseRetrievalConfigurationFilterSensitiveLog(obj.retrievalConfiguration),
  }),
});

/**
 * @internal
 */
export const RetrieveAndGenerateConfigurationFilterSensitiveLog = (obj: RetrieveAndGenerateConfiguration): any => ({
  ...obj,
  ...(obj.knowledgeBaseConfiguration && {
    knowledgeBaseConfiguration: KnowledgeBaseRetrieveAndGenerateConfigurationFilterSensitiveLog(
      obj.knowledgeBaseConfiguration
    ),
  }),
  ...(obj.externalSourcesConfiguration && {
    externalSourcesConfiguration: ExternalSourcesRetrieveAndGenerateConfigurationFilterSensitiveLog(
      obj.externalSourcesConfiguration
    ),
  }),
});

/**
 * @internal
 */
export const RetrieveAndGenerateRequestFilterSensitiveLog = (obj: RetrieveAndGenerateRequest): any => ({
  ...obj,
  ...(obj.input && { input: SENSITIVE_STRING }),
  ...(obj.retrieveAndGenerateConfiguration && {
    retrieveAndGenerateConfiguration: RetrieveAndGenerateConfigurationFilterSensitiveLog(
      obj.retrieveAndGenerateConfiguration
    ),
  }),
});

/**
 * @internal
 */
export const SessionStateFilterSensitiveLog = (obj: SessionState): any => ({
  ...obj,
  ...(obj.returnControlInvocationResults && {
    returnControlInvocationResults: obj.returnControlInvocationResults.map((item) =>
      InvocationResultMemberFilterSensitiveLog(item)
    ),
  }),
  ...(obj.files && { files: obj.files.map((item) => InputFileFilterSensitiveLog(item)) }),
  ...(obj.knowledgeBaseConfigurations && {
    knowledgeBaseConfigurations: obj.knowledgeBaseConfigurations.map((item) =>
      KnowledgeBaseConfigurationFilterSensitiveLog(item)
    ),
  }),
});

/**
 * @internal
 */
export const InvokeAgentRequestFilterSensitiveLog = (obj: InvokeAgentRequest): any => ({
  ...obj,
  ...(obj.sessionState && { sessionState: SessionStateFilterSensitiveLog(obj.sessionState) }),
  ...(obj.inputText && { inputText: SENSITIVE_STRING }),
});
