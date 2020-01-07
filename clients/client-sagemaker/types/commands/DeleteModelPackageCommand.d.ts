import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DeleteModelPackageInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteModelPackageCommandInput = DeleteModelPackageInput;
export declare type DeleteModelPackageCommandOutput = __MetadataBearer;
export declare class DeleteModelPackageCommand extends $Command<DeleteModelPackageCommandInput, DeleteModelPackageCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DeleteModelPackageCommandInput;
    constructor(input: DeleteModelPackageCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteModelPackageCommandInput, DeleteModelPackageCommandOutput>;
    private serialize;
    private deserialize;
}
