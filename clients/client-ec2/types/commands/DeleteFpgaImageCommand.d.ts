import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteFpgaImageRequest, DeleteFpgaImageResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteFpgaImageCommandInput = DeleteFpgaImageRequest;
export declare type DeleteFpgaImageCommandOutput = DeleteFpgaImageResult & __MetadataBearer;
export declare class DeleteFpgaImageCommand extends $Command<DeleteFpgaImageCommandInput, DeleteFpgaImageCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteFpgaImageCommandInput;
    constructor(input: DeleteFpgaImageCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteFpgaImageCommandInput, DeleteFpgaImageCommandOutput>;
    private serialize;
    private deserialize;
}
