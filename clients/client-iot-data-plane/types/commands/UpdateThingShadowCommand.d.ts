import { IoTDataPlaneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTDataPlaneClient";
import { UpdateThingShadowRequest, UpdateThingShadowResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateThingShadowCommandInput = UpdateThingShadowRequest;
export declare type UpdateThingShadowCommandOutput = UpdateThingShadowResponse & __MetadataBearer;
export declare class UpdateThingShadowCommand extends $Command<UpdateThingShadowCommandInput, UpdateThingShadowCommandOutput, IoTDataPlaneClientResolvedConfig> {
    readonly input: UpdateThingShadowCommandInput;
    constructor(input: UpdateThingShadowCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTDataPlaneClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateThingShadowCommandInput, UpdateThingShadowCommandOutput>;
    private serialize;
    private deserialize;
}
