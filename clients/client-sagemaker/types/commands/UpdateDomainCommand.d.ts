import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { UpdateDomainRequest, UpdateDomainResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateDomainCommandInput = UpdateDomainRequest;
export declare type UpdateDomainCommandOutput = UpdateDomainResponse & __MetadataBearer;
export declare class UpdateDomainCommand extends $Command<UpdateDomainCommandInput, UpdateDomainCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: UpdateDomainCommandInput;
    constructor(input: UpdateDomainCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDomainCommandInput, UpdateDomainCommandOutput>;
    private serialize;
    private deserialize;
}
