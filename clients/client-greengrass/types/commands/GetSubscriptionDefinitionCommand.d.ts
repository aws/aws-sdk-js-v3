import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { GetSubscriptionDefinitionRequest, GetSubscriptionDefinitionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetSubscriptionDefinitionCommandInput = GetSubscriptionDefinitionRequest;
export declare type GetSubscriptionDefinitionCommandOutput = GetSubscriptionDefinitionResponse & __MetadataBearer;
export declare class GetSubscriptionDefinitionCommand extends $Command<GetSubscriptionDefinitionCommandInput, GetSubscriptionDefinitionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: GetSubscriptionDefinitionCommandInput;
    constructor(input: GetSubscriptionDefinitionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSubscriptionDefinitionCommandInput, GetSubscriptionDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
