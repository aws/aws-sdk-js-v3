import { IoTDataPlaneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTDataPlaneClient";
import { PublishRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PublishCommandInput = PublishRequest;
export declare type PublishCommandOutput = __MetadataBearer;
export declare class PublishCommand extends $Command<PublishCommandInput, PublishCommandOutput, IoTDataPlaneClientResolvedConfig> {
    readonly input: PublishCommandInput;
    constructor(input: PublishCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTDataPlaneClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PublishCommandInput, PublishCommandOutput>;
    private serialize;
    private deserialize;
}
