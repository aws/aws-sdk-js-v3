import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DeleteAggregationAuthorizationRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteAggregationAuthorizationCommandInput = DeleteAggregationAuthorizationRequest;
export declare type DeleteAggregationAuthorizationCommandOutput = __MetadataBearer;
export declare class DeleteAggregationAuthorizationCommand extends $Command<DeleteAggregationAuthorizationCommandInput, DeleteAggregationAuthorizationCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: DeleteAggregationAuthorizationCommandInput;
    constructor(input: DeleteAggregationAuthorizationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteAggregationAuthorizationCommandInput, DeleteAggregationAuthorizationCommandOutput>;
    private serialize;
    private deserialize;
}
