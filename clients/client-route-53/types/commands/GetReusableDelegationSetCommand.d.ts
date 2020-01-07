import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { GetReusableDelegationSetRequest, GetReusableDelegationSetResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetReusableDelegationSetCommandInput = GetReusableDelegationSetRequest;
export declare type GetReusableDelegationSetCommandOutput = GetReusableDelegationSetResponse & __MetadataBearer;
export declare class GetReusableDelegationSetCommand extends $Command<GetReusableDelegationSetCommandInput, GetReusableDelegationSetCommandOutput, Route53ClientResolvedConfig> {
    readonly input: GetReusableDelegationSetCommandInput;
    constructor(input: GetReusableDelegationSetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetReusableDelegationSetCommandInput, GetReusableDelegationSetCommandOutput>;
    private serialize;
    private deserialize;
}
