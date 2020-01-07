import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { GetReusableDelegationSetLimitRequest, GetReusableDelegationSetLimitResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetReusableDelegationSetLimitCommandInput = GetReusableDelegationSetLimitRequest;
export declare type GetReusableDelegationSetLimitCommandOutput = GetReusableDelegationSetLimitResponse & __MetadataBearer;
export declare class GetReusableDelegationSetLimitCommand extends $Command<GetReusableDelegationSetLimitCommandInput, GetReusableDelegationSetLimitCommandOutput, Route53ClientResolvedConfig> {
    readonly input: GetReusableDelegationSetLimitCommandInput;
    constructor(input: GetReusableDelegationSetLimitCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetReusableDelegationSetLimitCommandInput, GetReusableDelegationSetLimitCommandOutput>;
    private serialize;
    private deserialize;
}
