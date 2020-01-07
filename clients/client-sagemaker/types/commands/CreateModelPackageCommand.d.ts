import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateModelPackageInput, CreateModelPackageOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateModelPackageCommandInput = CreateModelPackageInput;
export declare type CreateModelPackageCommandOutput = CreateModelPackageOutput & __MetadataBearer;
export declare class CreateModelPackageCommand extends $Command<CreateModelPackageCommandInput, CreateModelPackageCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: CreateModelPackageCommandInput;
    constructor(input: CreateModelPackageCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateModelPackageCommandInput, CreateModelPackageCommandOutput>;
    private serialize;
    private deserialize;
}
