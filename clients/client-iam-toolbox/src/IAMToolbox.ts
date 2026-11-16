// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type GetRequestAuthorizationDetailsCommandInput,
  type GetRequestAuthorizationDetailsCommandOutput,
  GetRequestAuthorizationDetailsCommand,
} from "./commands/GetRequestAuthorizationDetailsCommand";
import {
  type GetRequestAuthorizationPolicyCommandInput,
  type GetRequestAuthorizationPolicyCommandOutput,
  GetRequestAuthorizationPolicyCommand,
} from "./commands/GetRequestAuthorizationPolicyCommand";
import { IAMToolboxClient } from "./IAMToolboxClient";
import { paginateGetRequestAuthorizationDetails } from "./pagination/GetRequestAuthorizationDetailsPaginator";

const commands = {
  GetRequestAuthorizationDetailsCommand,
  GetRequestAuthorizationPolicyCommand,
};
const paginators = {
  paginateGetRequestAuthorizationDetails,
};

/**
 * @public
 */
export interface IAMToolboxRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface IAMToolbox {
  /**
   * @see {@link GetRequestAuthorizationDetailsCommand}
   */
  getRequestAuthorizationDetails(
    args: GetRequestAuthorizationDetailsCommandInput,
    options?: IAMToolboxRequestOptions
  ): Promise<GetRequestAuthorizationDetailsCommandOutput>;
  getRequestAuthorizationDetails(
    args: GetRequestAuthorizationDetailsCommandInput,
    cb: (err: any, data?: GetRequestAuthorizationDetailsCommandOutput) => void
  ): void;
  getRequestAuthorizationDetails(
    args: GetRequestAuthorizationDetailsCommandInput,
    options: IAMToolboxRequestOptions,
    cb: (err: any, data?: GetRequestAuthorizationDetailsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRequestAuthorizationPolicyCommand}
   */
  getRequestAuthorizationPolicy(
    args: GetRequestAuthorizationPolicyCommandInput,
    options?: IAMToolboxRequestOptions
  ): Promise<GetRequestAuthorizationPolicyCommandOutput>;
  getRequestAuthorizationPolicy(
    args: GetRequestAuthorizationPolicyCommandInput,
    cb: (err: any, data?: GetRequestAuthorizationPolicyCommandOutput) => void
  ): void;
  getRequestAuthorizationPolicy(
    args: GetRequestAuthorizationPolicyCommandInput,
    options: IAMToolboxRequestOptions,
    cb: (err: any, data?: GetRequestAuthorizationPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRequestAuthorizationDetailsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetRequestAuthorizationDetailsCommandOutput}.
   */
  paginateGetRequestAuthorizationDetails(
    args: GetRequestAuthorizationDetailsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetRequestAuthorizationDetailsCommandOutput>;
}

/**
 * <p>Contains APIs to work with AWS Identity and Access Management (IAM).</p>
 * @public
 */
export class IAMToolbox extends IAMToolboxClient implements IAMToolbox {}
createAggregatedClient(commands, IAMToolbox, { paginators });
