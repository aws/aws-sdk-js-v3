import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { ListSubscriptionDefinitionsRequest, ListSubscriptionDefinitionsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListSubscriptionDefinitionsCommandInput = ListSubscriptionDefinitionsRequest;
export declare type ListSubscriptionDefinitionsCommandOutput = ListSubscriptionDefinitionsResponse & __MetadataBearer;
export declare class ListSubscriptionDefinitionsCommand extends $Command<ListSubscriptionDefinitionsCommandInput, ListSubscriptionDefinitionsCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: ListSubscriptionDefinitionsCommandInput;
    constructor(input: ListSubscriptionDefinitionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListSubscriptionDefinitionsCommandInput, ListSubscriptionDefinitionsCommandOutput>;
    private serialize;
    private deserialize;
}
