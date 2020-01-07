import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { CopyOptionGroupMessage, CopyOptionGroupResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CopyOptionGroupCommandInput = CopyOptionGroupMessage;
export declare type CopyOptionGroupCommandOutput = CopyOptionGroupResult & __MetadataBearer;
export declare class CopyOptionGroupCommand extends $Command<CopyOptionGroupCommandInput, CopyOptionGroupCommandOutput, RDSClientResolvedConfig> {
    readonly input: CopyOptionGroupCommandInput;
    constructor(input: CopyOptionGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CopyOptionGroupCommandInput, CopyOptionGroupCommandOutput>;
    private serialize;
    private deserialize;
}
