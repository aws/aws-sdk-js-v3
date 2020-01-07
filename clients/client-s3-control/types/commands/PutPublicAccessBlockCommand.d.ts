import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { PutPublicAccessBlockRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutPublicAccessBlockCommandInput = PutPublicAccessBlockRequest;
export declare type PutPublicAccessBlockCommandOutput = __MetadataBearer;
export declare class PutPublicAccessBlockCommand extends $Command<PutPublicAccessBlockCommandInput, PutPublicAccessBlockCommandOutput, S3ControlClientResolvedConfig> {
    readonly input: PutPublicAccessBlockCommandInput;
    constructor(input: PutPublicAccessBlockCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ControlClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutPublicAccessBlockCommandInput, PutPublicAccessBlockCommandOutput>;
    private serialize;
    private deserialize;
}
