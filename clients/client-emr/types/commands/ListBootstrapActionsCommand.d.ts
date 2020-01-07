import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { ListBootstrapActionsInput, ListBootstrapActionsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListBootstrapActionsCommandInput = ListBootstrapActionsInput;
export declare type ListBootstrapActionsCommandOutput = ListBootstrapActionsOutput & __MetadataBearer;
export declare class ListBootstrapActionsCommand extends $Command<ListBootstrapActionsCommandInput, ListBootstrapActionsCommandOutput, EMRClientResolvedConfig> {
    readonly input: ListBootstrapActionsCommandInput;
    constructor(input: ListBootstrapActionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EMRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListBootstrapActionsCommandInput, ListBootstrapActionsCommandOutput>;
    private serialize;
    private deserialize;
}
