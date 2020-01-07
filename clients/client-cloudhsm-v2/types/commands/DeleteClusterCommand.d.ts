import { CloudHSMV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMV2Client";
import { DeleteClusterRequest, DeleteClusterResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteClusterCommandInput = DeleteClusterRequest;
export declare type DeleteClusterCommandOutput = DeleteClusterResponse & __MetadataBearer;
export declare class DeleteClusterCommand extends $Command<DeleteClusterCommandInput, DeleteClusterCommandOutput, CloudHSMV2ClientResolvedConfig> {
    readonly input: DeleteClusterCommandInput;
    constructor(input: DeleteClusterCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudHSMV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteClusterCommandInput, DeleteClusterCommandOutput>;
    private serialize;
    private deserialize;
}
