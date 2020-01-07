import { OpsWorksCMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksCMClient";
import { ExportServerEngineAttributeRequest, ExportServerEngineAttributeResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ExportServerEngineAttributeCommandInput = ExportServerEngineAttributeRequest;
export declare type ExportServerEngineAttributeCommandOutput = ExportServerEngineAttributeResponse & __MetadataBearer;
export declare class ExportServerEngineAttributeCommand extends $Command<ExportServerEngineAttributeCommandInput, ExportServerEngineAttributeCommandOutput, OpsWorksCMClientResolvedConfig> {
    readonly input: ExportServerEngineAttributeCommandInput;
    constructor(input: ExportServerEngineAttributeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksCMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ExportServerEngineAttributeCommandInput, ExportServerEngineAttributeCommandOutput>;
    private serialize;
    private deserialize;
}
