import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { CreateAccessPointRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateAccessPointCommandInput = CreateAccessPointRequest;
export declare type CreateAccessPointCommandOutput = __MetadataBearer;
export declare class CreateAccessPointCommand extends $Command<CreateAccessPointCommandInput, CreateAccessPointCommandOutput, S3ControlClientResolvedConfig> {
    readonly input: CreateAccessPointCommandInput;
    constructor(input: CreateAccessPointCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ControlClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateAccessPointCommandInput, CreateAccessPointCommandOutput>;
    private serialize;
    private deserialize;
}
