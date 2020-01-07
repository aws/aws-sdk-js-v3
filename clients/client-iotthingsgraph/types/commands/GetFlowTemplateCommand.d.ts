import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { GetFlowTemplateRequest, GetFlowTemplateResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetFlowTemplateCommandInput = GetFlowTemplateRequest;
export declare type GetFlowTemplateCommandOutput = GetFlowTemplateResponse & __MetadataBearer;
export declare class GetFlowTemplateCommand extends $Command<GetFlowTemplateCommandInput, GetFlowTemplateCommandOutput, IoTThingsGraphClientResolvedConfig> {
    readonly input: GetFlowTemplateCommandInput;
    constructor(input: GetFlowTemplateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTThingsGraphClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetFlowTemplateCommandInput, GetFlowTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
