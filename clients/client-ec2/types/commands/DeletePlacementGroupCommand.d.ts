import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeletePlacementGroupRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeletePlacementGroupCommandInput = DeletePlacementGroupRequest;
export declare type DeletePlacementGroupCommandOutput = __MetadataBearer;
export declare class DeletePlacementGroupCommand extends $Command<DeletePlacementGroupCommandInput, DeletePlacementGroupCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeletePlacementGroupCommandInput;
    constructor(input: DeletePlacementGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeletePlacementGroupCommandInput, DeletePlacementGroupCommandOutput>;
    private serialize;
    private deserialize;
}
