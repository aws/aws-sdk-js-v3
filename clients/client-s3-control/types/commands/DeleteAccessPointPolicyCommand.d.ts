import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { DeleteAccessPointPolicyRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteAccessPointPolicyCommandInput = DeleteAccessPointPolicyRequest;
export declare type DeleteAccessPointPolicyCommandOutput = __MetadataBearer;
export declare class DeleteAccessPointPolicyCommand extends $Command<DeleteAccessPointPolicyCommandInput, DeleteAccessPointPolicyCommandOutput, S3ControlClientResolvedConfig> {
    readonly input: DeleteAccessPointPolicyCommandInput;
    constructor(input: DeleteAccessPointPolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ControlClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteAccessPointPolicyCommandInput, DeleteAccessPointPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
