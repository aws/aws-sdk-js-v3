// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { SchemaAlreadyPublishedException as __SchemaAlreadyPublishedException } from "../models/index";
import {
  _c,
  _CS,
  _CSR,
  _CSRr,
  _Do,
  _DSA,
  _e,
  _GSAJ,
  _GSAJR,
  _GSAJRe,
  _h,
  _hE,
  _hH,
  _M,
  _MV,
  _N,
  _PS,
  _PSA,
  _PSR,
  _PSRu,
  _SA,
  _SAPE,
  _US,
  _USR,
  _USRp,
  _Ve,
  _xadp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateSchemaRequest = struct(n0, _CSR, 0, [_N], [0]);
export var CreateSchemaResponse = struct(n0, _CSRr, 0, [_SA], [0]);
export var GetSchemaAsJsonRequest = struct(
  n0,
  _GSAJR,
  0,
  [_SA],
  [
    [
      0,
      {
        [_hH]: _xadp,
      },
    ],
  ]
);
export var GetSchemaAsJsonResponse = struct(n0, _GSAJRe, 0, [_N, _Do], [0, 0]);
export var PublishSchemaRequest = struct(
  n0,
  _PSR,
  0,
  [_DSA, _Ve, _MV, _N],
  [
    [
      0,
      {
        [_hH]: _xadp,
      },
    ],
    0,
    0,
    0,
  ]
);
export var PublishSchemaResponse = struct(n0, _PSRu, 0, [_PSA], [0]);
export var SchemaAlreadyPublishedException = error(
  n0,
  _SAPE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __SchemaAlreadyPublishedException
);
export var UpdateSchemaRequest = struct(
  n0,
  _USR,
  0,
  [_SA, _N],
  [
    [
      0,
      {
        [_hH]: _xadp,
      },
    ],
    0,
  ]
);
export var UpdateSchemaResponse = struct(n0, _USRp, 0, [_SA], [0]);
export var CreateSchema = op(
  n0,
  _CS,
  {
    [_h]: ["PUT", "/amazonclouddirectory/2017-01-11/schema/create", 200],
  },
  () => CreateSchemaRequest,
  () => CreateSchemaResponse
);
export var GetSchemaAsJson = op(
  n0,
  _GSAJ,
  {
    [_h]: ["POST", "/amazonclouddirectory/2017-01-11/schema/json", 200],
  },
  () => GetSchemaAsJsonRequest,
  () => GetSchemaAsJsonResponse
);
export var PublishSchema = op(
  n0,
  _PS,
  {
    [_h]: ["PUT", "/amazonclouddirectory/2017-01-11/schema/publish", 200],
  },
  () => PublishSchemaRequest,
  () => PublishSchemaResponse
);
export var UpdateSchema = op(
  n0,
  _US,
  {
    [_h]: ["PUT", "/amazonclouddirectory/2017-01-11/schema/update", 200],
  },
  () => UpdateSchemaRequest,
  () => UpdateSchemaResponse
);
