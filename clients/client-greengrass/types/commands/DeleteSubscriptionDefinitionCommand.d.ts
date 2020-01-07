import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { DeleteSubscriptionDefinitionRequest, DeleteSubscriptionDefinitionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteSubscriptionDefinitionCommandInput = DeleteSubscriptionDefinitionRequest;
export declare type DeleteSubscriptionDefinitionCommandOutput = DeleteSubscriptionDefinitionResponse & __MetadataBearer;
export declare class DeleteSubscriptionDefinitionCommand extends $Command<DeleteSubscriptionDefinitionCommandInput, DeleteSubscriptionDefinitionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: DeleteSubscriptionDefinitionCommandInput;
    constructor(input: DeleteSubscriptionDefinitionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteSubscriptionDefinitionCommandInput, DeleteSubscriptionDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
