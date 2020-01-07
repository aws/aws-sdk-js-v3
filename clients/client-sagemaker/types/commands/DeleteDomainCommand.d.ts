import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DeleteDomainRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteDomainCommandInput = DeleteDomainRequest;
export declare type DeleteDomainCommandOutput = __MetadataBearer;
export declare class DeleteDomainCommand extends $Command<DeleteDomainCommandInput, DeleteDomainCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DeleteDomainCommandInput;
    constructor(input: DeleteDomainCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDomainCommandInput, DeleteDomainCommandOutput>;
    private serialize;
    private deserialize;
}
