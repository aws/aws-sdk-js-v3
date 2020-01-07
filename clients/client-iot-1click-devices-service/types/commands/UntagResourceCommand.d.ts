import { IoT1ClickDevicesServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoT1ClickDevicesServiceClient";
import { UntagResourceRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UntagResourceCommandInput = UntagResourceRequest;
export declare type UntagResourceCommandOutput = __MetadataBearer;
export declare class UntagResourceCommand extends $Command<UntagResourceCommandInput, UntagResourceCommandOutput, IoT1ClickDevicesServiceClientResolvedConfig> {
    readonly input: UntagResourceCommandInput;
    constructor(input: UntagResourceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoT1ClickDevicesServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UntagResourceCommandInput, UntagResourceCommandOutput>;
    private serialize;
    private deserialize;
}
