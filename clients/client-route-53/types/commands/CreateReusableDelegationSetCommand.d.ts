import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { CreateReusableDelegationSetRequest, CreateReusableDelegationSetResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateReusableDelegationSetCommandInput = CreateReusableDelegationSetRequest;
export declare type CreateReusableDelegationSetCommandOutput = CreateReusableDelegationSetResponse & __MetadataBearer;
export declare class CreateReusableDelegationSetCommand extends $Command<CreateReusableDelegationSetCommandInput, CreateReusableDelegationSetCommandOutput, Route53ClientResolvedConfig> {
    readonly input: CreateReusableDelegationSetCommandInput;
    constructor(input: CreateReusableDelegationSetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateReusableDelegationSetCommandInput, CreateReusableDelegationSetCommandOutput>;
    private serialize;
    private deserialize;
}
