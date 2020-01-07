import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { CancelResizeMessage, ResizeProgressMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CancelResizeCommandInput = CancelResizeMessage;
export declare type CancelResizeCommandOutput = ResizeProgressMessage & __MetadataBearer;
export declare class CancelResizeCommand extends $Command<CancelResizeCommandInput, CancelResizeCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: CancelResizeCommandInput;
    constructor(input: CancelResizeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CancelResizeCommandInput, CancelResizeCommandOutput>;
    private serialize;
    private deserialize;
}
