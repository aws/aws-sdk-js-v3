import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { PutAggregationAuthorizationRequest, PutAggregationAuthorizationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutAggregationAuthorizationCommandInput = PutAggregationAuthorizationRequest;
export declare type PutAggregationAuthorizationCommandOutput = PutAggregationAuthorizationResponse & __MetadataBearer;
export declare class PutAggregationAuthorizationCommand extends $Command<PutAggregationAuthorizationCommandInput, PutAggregationAuthorizationCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: PutAggregationAuthorizationCommandInput;
    constructor(input: PutAggregationAuthorizationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutAggregationAuthorizationCommandInput, PutAggregationAuthorizationCommandOutput>;
    private serialize;
    private deserialize;
}
