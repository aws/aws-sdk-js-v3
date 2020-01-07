import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { DeleteServiceRequest, DeleteServiceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteServiceCommandInput = DeleteServiceRequest;
export declare type DeleteServiceCommandOutput = DeleteServiceResponse & __MetadataBearer;
export declare class DeleteServiceCommand extends $Command<DeleteServiceCommandInput, DeleteServiceCommandOutput, ECSClientResolvedConfig> {
    readonly input: DeleteServiceCommandInput;
    constructor(input: DeleteServiceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteServiceCommandInput, DeleteServiceCommandOutput>;
    private serialize;
    private deserialize;
}
