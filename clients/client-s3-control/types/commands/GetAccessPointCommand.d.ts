import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { GetAccessPointRequest, GetAccessPointResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetAccessPointCommandInput = GetAccessPointRequest;
export declare type GetAccessPointCommandOutput = GetAccessPointResult & __MetadataBearer;
export declare class GetAccessPointCommand extends $Command<GetAccessPointCommandInput, GetAccessPointCommandOutput, S3ControlClientResolvedConfig> {
    readonly input: GetAccessPointCommandInput;
    constructor(input: GetAccessPointCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ControlClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAccessPointCommandInput, GetAccessPointCommandOutput>;
    private serialize;
    private deserialize;
}
