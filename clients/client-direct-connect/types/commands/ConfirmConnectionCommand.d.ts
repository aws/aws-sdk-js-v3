import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { ConfirmConnectionRequest, ConfirmConnectionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ConfirmConnectionCommandInput = ConfirmConnectionRequest;
export declare type ConfirmConnectionCommandOutput = ConfirmConnectionResponse & __MetadataBearer;
export declare class ConfirmConnectionCommand extends $Command<ConfirmConnectionCommandInput, ConfirmConnectionCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: ConfirmConnectionCommandInput;
    constructor(input: ConfirmConnectionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ConfirmConnectionCommandInput, ConfirmConnectionCommandOutput>;
    private serialize;
    private deserialize;
}
