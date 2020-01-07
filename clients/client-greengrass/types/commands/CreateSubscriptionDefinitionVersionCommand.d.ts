import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { CreateSubscriptionDefinitionVersionRequest, CreateSubscriptionDefinitionVersionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateSubscriptionDefinitionVersionCommandInput = CreateSubscriptionDefinitionVersionRequest;
export declare type CreateSubscriptionDefinitionVersionCommandOutput = CreateSubscriptionDefinitionVersionResponse & __MetadataBearer;
export declare class CreateSubscriptionDefinitionVersionCommand extends $Command<CreateSubscriptionDefinitionVersionCommandInput, CreateSubscriptionDefinitionVersionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: CreateSubscriptionDefinitionVersionCommandInput;
    constructor(input: CreateSubscriptionDefinitionVersionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateSubscriptionDefinitionVersionCommandInput, CreateSubscriptionDefinitionVersionCommandOutput>;
    private serialize;
    private deserialize;
}
