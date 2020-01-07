import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteRouteTableRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteRouteTableCommandInput = DeleteRouteTableRequest;
export declare type DeleteRouteTableCommandOutput = __MetadataBearer;
export declare class DeleteRouteTableCommand extends $Command<DeleteRouteTableCommandInput, DeleteRouteTableCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteRouteTableCommandInput;
    constructor(input: DeleteRouteTableCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteRouteTableCommandInput, DeleteRouteTableCommandOutput>;
    private serialize;
    private deserialize;
}
