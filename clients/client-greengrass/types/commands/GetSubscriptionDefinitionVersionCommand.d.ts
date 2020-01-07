import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { GetSubscriptionDefinitionVersionRequest, GetSubscriptionDefinitionVersionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetSubscriptionDefinitionVersionCommandInput = GetSubscriptionDefinitionVersionRequest;
export declare type GetSubscriptionDefinitionVersionCommandOutput = GetSubscriptionDefinitionVersionResponse & __MetadataBearer;
export declare class GetSubscriptionDefinitionVersionCommand extends $Command<GetSubscriptionDefinitionVersionCommandInput, GetSubscriptionDefinitionVersionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: GetSubscriptionDefinitionVersionCommandInput;
    constructor(input: GetSubscriptionDefinitionVersionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSubscriptionDefinitionVersionCommandInput, GetSubscriptionDefinitionVersionCommandOutput>;
    private serialize;
    private deserialize;
}
