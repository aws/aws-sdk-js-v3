import { IoTDataPlaneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTDataPlaneClient";
import { GetThingShadowRequest, GetThingShadowResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetThingShadowCommandInput = GetThingShadowRequest;
export declare type GetThingShadowCommandOutput = GetThingShadowResponse & __MetadataBearer;
export declare class GetThingShadowCommand extends $Command<GetThingShadowCommandInput, GetThingShadowCommandOutput, IoTDataPlaneClientResolvedConfig> {
    readonly input: GetThingShadowCommandInput;
    constructor(input: GetThingShadowCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTDataPlaneClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetThingShadowCommandInput, GetThingShadowCommandOutput>;
    private serialize;
    private deserialize;
}
