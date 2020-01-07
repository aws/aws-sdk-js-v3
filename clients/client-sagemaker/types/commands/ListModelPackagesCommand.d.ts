import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListModelPackagesInput, ListModelPackagesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListModelPackagesCommandInput = ListModelPackagesInput;
export declare type ListModelPackagesCommandOutput = ListModelPackagesOutput & __MetadataBearer;
export declare class ListModelPackagesCommand extends $Command<ListModelPackagesCommandInput, ListModelPackagesCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: ListModelPackagesCommandInput;
    constructor(input: ListModelPackagesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListModelPackagesCommandInput, ListModelPackagesCommandOutput>;
    private serialize;
    private deserialize;
}
