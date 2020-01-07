import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { GetSystemTemplateRevisionsRequest, GetSystemTemplateRevisionsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetSystemTemplateRevisionsCommandInput = GetSystemTemplateRevisionsRequest;
export declare type GetSystemTemplateRevisionsCommandOutput = GetSystemTemplateRevisionsResponse & __MetadataBearer;
export declare class GetSystemTemplateRevisionsCommand extends $Command<GetSystemTemplateRevisionsCommandInput, GetSystemTemplateRevisionsCommandOutput, IoTThingsGraphClientResolvedConfig> {
    readonly input: GetSystemTemplateRevisionsCommandInput;
    constructor(input: GetSystemTemplateRevisionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTThingsGraphClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSystemTemplateRevisionsCommandInput, GetSystemTemplateRevisionsCommandOutput>;
    private serialize;
    private deserialize;
}
