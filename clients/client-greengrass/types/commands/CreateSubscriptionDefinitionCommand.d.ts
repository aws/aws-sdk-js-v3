import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { CreateSubscriptionDefinitionRequest, CreateSubscriptionDefinitionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateSubscriptionDefinitionCommandInput = CreateSubscriptionDefinitionRequest;
export declare type CreateSubscriptionDefinitionCommandOutput = CreateSubscriptionDefinitionResponse & __MetadataBearer;
export declare class CreateSubscriptionDefinitionCommand extends $Command<CreateSubscriptionDefinitionCommandInput, CreateSubscriptionDefinitionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: CreateSubscriptionDefinitionCommandInput;
    constructor(input: CreateSubscriptionDefinitionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateSubscriptionDefinitionCommandInput, CreateSubscriptionDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
