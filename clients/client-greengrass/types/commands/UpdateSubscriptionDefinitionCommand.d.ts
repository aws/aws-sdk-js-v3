import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { UpdateSubscriptionDefinitionRequest, UpdateSubscriptionDefinitionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateSubscriptionDefinitionCommandInput = UpdateSubscriptionDefinitionRequest;
export declare type UpdateSubscriptionDefinitionCommandOutput = UpdateSubscriptionDefinitionResponse & __MetadataBearer;
export declare class UpdateSubscriptionDefinitionCommand extends $Command<UpdateSubscriptionDefinitionCommandInput, UpdateSubscriptionDefinitionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: UpdateSubscriptionDefinitionCommandInput;
    constructor(input: UpdateSubscriptionDefinitionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateSubscriptionDefinitionCommandInput, UpdateSubscriptionDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
