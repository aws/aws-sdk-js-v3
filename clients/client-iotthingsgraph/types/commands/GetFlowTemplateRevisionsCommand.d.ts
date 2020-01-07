import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { GetFlowTemplateRevisionsRequest, GetFlowTemplateRevisionsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetFlowTemplateRevisionsCommandInput = GetFlowTemplateRevisionsRequest;
export declare type GetFlowTemplateRevisionsCommandOutput = GetFlowTemplateRevisionsResponse & __MetadataBearer;
export declare class GetFlowTemplateRevisionsCommand extends $Command<GetFlowTemplateRevisionsCommandInput, GetFlowTemplateRevisionsCommandOutput, IoTThingsGraphClientResolvedConfig> {
    readonly input: GetFlowTemplateRevisionsCommandInput;
    constructor(input: GetFlowTemplateRevisionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTThingsGraphClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetFlowTemplateRevisionsCommandInput, GetFlowTemplateRevisionsCommandOutput>;
    private serialize;
    private deserialize;
}
