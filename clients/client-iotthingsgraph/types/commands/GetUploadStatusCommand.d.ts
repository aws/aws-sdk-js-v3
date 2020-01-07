import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { GetUploadStatusRequest, GetUploadStatusResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetUploadStatusCommandInput = GetUploadStatusRequest;
export declare type GetUploadStatusCommandOutput = GetUploadStatusResponse & __MetadataBearer;
export declare class GetUploadStatusCommand extends $Command<GetUploadStatusCommandInput, GetUploadStatusCommandOutput, IoTThingsGraphClientResolvedConfig> {
    readonly input: GetUploadStatusCommandInput;
    constructor(input: GetUploadStatusCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTThingsGraphClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetUploadStatusCommandInput, GetUploadStatusCommandOutput>;
    private serialize;
    private deserialize;
}
