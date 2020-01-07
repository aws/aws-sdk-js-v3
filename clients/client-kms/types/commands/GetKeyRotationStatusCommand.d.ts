import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { GetKeyRotationStatusRequest, GetKeyRotationStatusResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetKeyRotationStatusCommandInput = GetKeyRotationStatusRequest;
export declare type GetKeyRotationStatusCommandOutput = GetKeyRotationStatusResponse & __MetadataBearer;
export declare class GetKeyRotationStatusCommand extends $Command<GetKeyRotationStatusCommandInput, GetKeyRotationStatusCommandOutput, KMSClientResolvedConfig> {
    readonly input: GetKeyRotationStatusCommandInput;
    constructor(input: GetKeyRotationStatusCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetKeyRotationStatusCommandInput, GetKeyRotationStatusCommandOutput>;
    private serialize;
    private deserialize;
}
