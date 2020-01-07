import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { DeleteAccessPointRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteAccessPointCommandInput = DeleteAccessPointRequest;
export declare type DeleteAccessPointCommandOutput = __MetadataBearer;
export declare class DeleteAccessPointCommand extends $Command<DeleteAccessPointCommandInput, DeleteAccessPointCommandOutput, S3ControlClientResolvedConfig> {
    readonly input: DeleteAccessPointCommandInput;
    constructor(input: DeleteAccessPointCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ControlClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteAccessPointCommandInput, DeleteAccessPointCommandOutput>;
    private serialize;
    private deserialize;
}
