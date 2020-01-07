import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { ListSubscriptionDefinitionVersionsRequest, ListSubscriptionDefinitionVersionsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListSubscriptionDefinitionVersionsCommandInput = ListSubscriptionDefinitionVersionsRequest;
export declare type ListSubscriptionDefinitionVersionsCommandOutput = ListSubscriptionDefinitionVersionsResponse & __MetadataBearer;
export declare class ListSubscriptionDefinitionVersionsCommand extends $Command<ListSubscriptionDefinitionVersionsCommandInput, ListSubscriptionDefinitionVersionsCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: ListSubscriptionDefinitionVersionsCommandInput;
    constructor(input: ListSubscriptionDefinitionVersionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListSubscriptionDefinitionVersionsCommandInput, ListSubscriptionDefinitionVersionsCommandOutput>;
    private serialize;
    private deserialize;
}
