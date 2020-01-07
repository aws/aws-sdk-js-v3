import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { UpdateAssociationStatusRequest, UpdateAssociationStatusResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateAssociationStatusCommandInput = UpdateAssociationStatusRequest;
export declare type UpdateAssociationStatusCommandOutput = UpdateAssociationStatusResult & __MetadataBearer;
export declare class UpdateAssociationStatusCommand extends $Command<UpdateAssociationStatusCommandInput, UpdateAssociationStatusCommandOutput, SSMClientResolvedConfig> {
    readonly input: UpdateAssociationStatusCommandInput;
    constructor(input: UpdateAssociationStatusCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateAssociationStatusCommandInput, UpdateAssociationStatusCommandOutput>;
    private serialize;
    private deserialize;
}
