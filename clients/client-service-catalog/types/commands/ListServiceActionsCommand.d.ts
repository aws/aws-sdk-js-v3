import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { ListServiceActionsInput, ListServiceActionsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListServiceActionsCommandInput = ListServiceActionsInput;
export declare type ListServiceActionsCommandOutput = ListServiceActionsOutput & __MetadataBearer;
export declare class ListServiceActionsCommand extends $Command<ListServiceActionsCommandInput, ListServiceActionsCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: ListServiceActionsCommandInput;
    constructor(input: ListServiceActionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListServiceActionsCommandInput, ListServiceActionsCommandOutput>;
    private serialize;
    private deserialize;
}
