// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { GraphQLSchemaException as __GraphQLSchemaException } from "../models/index";
import {
  _aI,
  _c,
  _def,
  _e,
  _f,
  _GIS,
  _GISR,
  _GISRe,
  _GQLSE,
  _h,
  _hE,
  _hQ,
  _iD,
  _m,
  _s,
  _sc,
  _SSC,
  _SSCR,
  _SSCRt,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetIntrospectionSchemaRequest = struct(
  n0,
  _GISR,
  0,
  [_aI, _f, _iD],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _f,
      },
    ],
    [
      2,
      {
        [_hQ]: _iD,
      },
    ],
  ]
);
export var GetIntrospectionSchemaResponse = struct(n0, _GISRe, 0, [_sc], [[21, 16]]);
export var GraphQLSchemaException = error(
  n0,
  _GQLSE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __GraphQLSchemaException
);
export var StartSchemaCreationRequest = struct(n0, _SSCR, 0, [_aI, _def], [[0, 1], 21]);
export var StartSchemaCreationResponse = struct(n0, _SSCRt, 0, [_s], [0]);
export var GetIntrospectionSchema = op(
  n0,
  _GIS,
  {
    [_h]: ["GET", "/v1/apis/{apiId}/schema", 200],
  },
  () => GetIntrospectionSchemaRequest,
  () => GetIntrospectionSchemaResponse
);
export var StartSchemaCreation = op(
  n0,
  _SSC,
  {
    [_h]: ["POST", "/v1/apis/{apiId}/schemacreation", 200],
  },
  () => StartSchemaCreationRequest,
  () => StartSchemaCreationResponse
);
