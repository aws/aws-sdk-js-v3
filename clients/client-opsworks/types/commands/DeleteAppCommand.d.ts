import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { DeleteAppRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteAppCommandInput = DeleteAppRequest;
export declare type DeleteAppCommandOutput = __MetadataBearer;
export declare class DeleteAppCommand extends $Command<DeleteAppCommandInput, DeleteAppCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: DeleteAppCommandInput;
    constructor(input: DeleteAppCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteAppCommandInput, DeleteAppCommandOutput>;
    private serialize;
    private deserialize;
}
