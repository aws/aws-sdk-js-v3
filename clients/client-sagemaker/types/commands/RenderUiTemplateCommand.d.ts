import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { RenderUiTemplateRequest, RenderUiTemplateResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RenderUiTemplateCommandInput = RenderUiTemplateRequest;
export declare type RenderUiTemplateCommandOutput = RenderUiTemplateResponse & __MetadataBearer;
export declare class RenderUiTemplateCommand extends $Command<RenderUiTemplateCommandInput, RenderUiTemplateCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: RenderUiTemplateCommandInput;
    constructor(input: RenderUiTemplateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RenderUiTemplateCommandInput, RenderUiTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
