import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { ListTestGridSessionActionsRequest, ListTestGridSessionActionsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListTestGridSessionActionsCommandInput = ListTestGridSessionActionsRequest;
export declare type ListTestGridSessionActionsCommandOutput = ListTestGridSessionActionsResult & __MetadataBearer;
export declare class ListTestGridSessionActionsCommand extends $Command<ListTestGridSessionActionsCommandInput, ListTestGridSessionActionsCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: ListTestGridSessionActionsCommandInput;
    constructor(input: ListTestGridSessionActionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTestGridSessionActionsCommandInput, ListTestGridSessionActionsCommandOutput>;
    private serialize;
    private deserialize;
}
