import { KinesisVideoSignalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisVideoSignalingClient";
import { GetIceServerConfigRequest, GetIceServerConfigResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetIceServerConfigCommandInput = GetIceServerConfigRequest;
export declare type GetIceServerConfigCommandOutput = GetIceServerConfigResponse & __MetadataBearer;
export declare class GetIceServerConfigCommand extends $Command<GetIceServerConfigCommandInput, GetIceServerConfigCommandOutput, KinesisVideoSignalingClientResolvedConfig> {
    readonly input: GetIceServerConfigCommandInput;
    constructor(input: GetIceServerConfigCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisVideoSignalingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetIceServerConfigCommandInput, GetIceServerConfigCommandOutput>;
    private serialize;
    private deserialize;
}
